import React from 'react';

// d3js
import * as d3 from 'd3';
import * as d3Dsv from 'd3-dsv';
import { forceAttract } from 'd3-force-attract';
import { forceCluster } from 'd3-force-cluster';

// Application constants
import * as Constants from './Constants.js';

class BubblePlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      svgWidth : 0,
      svgHeight : 0,
      svgMargin : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    };
  }
  
  componentDidUpdate(prevProps) {
    //
    // use equality tests to decide whether or not to redraw, to avoid infinite redraws
    //
    if (this.props.plotData !== prevProps.plotData) {
      console.log("data changed");
      this.renderData();
    }
    else if ((this.props.svgWidth !== prevProps.svgWidth) || (this.props.svgHeight !== prevProps.svgHeight)) {
      console.log("svgWidth or svgHeight changed");
      console.log("old W H", prevProps.svgWidth, prevProps.svgHeight);
      console.log("new W H", this.props.svgWidth, this.props.svgHeight);
      if (this.props.plotData) {
        this.setState({ 
          svgWidth : this.props.svgWidth,
          svgHeight : this.props.svgHeight
        }, function() {
          this.renderData();
        });
      }
    }
  }
  
  renderData = () => {
    console.log("renderData()");
    
    // parameters
    const margin = this.state.svgMargin;
    const svgFullWidth = parseInt(this.state.svgWidth);
    const svgFullHeight = parseInt(this.state.svgHeight);
    const padding = 1.5; // separation between same-color nodes
    const maxRadius = 15; 
    
    // unique identifier
    var id = this.props.bubblePlotIdPrefix + "-" + this.props.bubblePlotIdSuffix;
    var svg_parent_id = "#" + id;
      
    // cleanup
    const svgChild = d3.selectAll(svg_parent_id).select('svg');
    if (svgChild) {
      console.log("removing SVG container", svg_parent_id)
      svgChild.remove();
    }
    
    // read in data
    var labeledData = this.props.plotDataColumnHeaders + '\n' + this.props.plotData;
    var data = d3Dsv.csvParse(labeledData);
    var totalCount = 0;
    data.forEach(function(d) {
      d.count = +d.count;
    });
    
    // unique cluster/group id's
    var cs = [];
    data.forEach(function(d){
      if (!cs.includes(d.realname)) {
        cs.push(d.realname);
      }
    });
    
    var n = data.length; // total number of nodes
    var m = cs.length; // number of distinct clusters
    
    // set up useful color map variables
    var colormap = Constants[this.props.plotColormap];
    var colorNameMap = map_realnames_to_names(colormap);
    var colorHexMap = map_realnames_to_hex(colormap);
    
    // create clusters and nodes
    var clusters = new Array(m);
    var nodes = [];
    for (var i = 0; i<n; i++){
      nodes.push(create_nodes(data, i, colorNameMap, this.props.plotRadiusScaleFactor));
    }
    
    // layout
    var simulation = d3.forceSimulation()
      // keep entire simulation balanced around screen center
      .force('center', d3.forceCenter(svgFullWidth/2, svgFullHeight/2 - 50))
      
      // pull toward center
      .force('attract', forceAttract()
        .target([svgFullWidth/2, svgFullHeight/2])
        .strength(this.props.plotAttractStrength))
      
      // cluster by section
      .force('cluster', forceCluster()
        .centers(function (d) { return clusters[d.cluster]; })
        .strength(this.props.plotClusterStrength)
        .centerInertia(this.props.plotClusterCenterInertia))
      
      // apply collision with padding
      .force('collide', d3.forceCollide(function (d) { return d.radius + padding; })
        .strength(Constants.defaults.graph.collideStrength))
      
      .on('tick', layoutTick)
      .nodes(nodes);
    
    console.log("adding SVG container", svg_parent_id)
    let svgAdjustedWidth = parseInt(this.props.svgWidth) + parseInt(margin.left) + parseInt(margin.right) + 'px';
    let svgAdjustedHeight = parseInt(this.props.svgHeight) + parseInt(margin.top) + parseInt(margin.bottom) + 'px';
    console.log("dimensions W H", svgAdjustedWidth, svgAdjustedHeight);
    const svg = d3.select(svg_parent_id)
      .append('svg')
      .attr("width", svgAdjustedWidth)
      .attr("height", svgAdjustedHeight)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
    var g = svg.append("g")
      .attr("class", "everything");
      
    var node = g.selectAll('circle')
      .data(nodes)
      .enter().append('circle')
        .style('fill', function (d) { 
          return colorHexMap[d.realname]; 
        });

    var drag_handler = d3.drag()
    	.on("start", drag_start)
    	.on("drag", drag_drag)
    	.on("end", drag_end);	
    	
    drag_handler(node);
    
    // tooltip
    var tooltip = d3.select("body").append("div")   
      .attr("class", "tooltip")               
      .style("opacity", 0);
    
    node.on("mouseover", function(d, i) {
      tooltip.transition().duration(200).style("opacity", 0.9);
      tooltip.html(d.text)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY) + "px");
      })
      .on("mouseout", function(d) {
        tooltip.transition().duration(500).style("opacity", 0.0);
      });
      
    // zoom handler
    var zoom_handler = d3.zoom()
      .on("zoom", zoom_actions); 
    function zoom_actions() {
      g.attr("transform", d3.event.transform)
    }
    zoom_handler(svg);

    // per-node drag fns
    function drag_start(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function drag_drag(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }
    
    function drag_end(d) {
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    var t = d3.timer(function (elapsed) {
      var dt = elapsed / Constants.defaults.graph.transitionTime;
      simulation.force('collide').strength(Math.pow(dt, 2) * 0.7);
      if (dt >= 1.0) t.stop();
    });
    
    function layoutTick (e) {
      node
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r', function (d) { return d.radius; });
    }

    function create_nodes(data, node_counter, colorNameMap, scaleFactor) {
      var realname = data[node_counter].realname;
      var i = cs.indexOf(data[node_counter].realname),
        r = Math.sqrt((i + 1) / m * -Math.log(Math.random())) * maxRadius,
        d = {
          cluster: i,
          realname: data[node_counter].realname,
          radius: data[node_counter].count/scaleFactor,
          text: colorNameMap[data[node_counter].realname] + "<br/>" + data[node_counter].count + " elements<br>(" + data[node_counter].chromosome + ")",
          x: Math.cos(i / m * 2 * Math.PI) * 200 + svgFullWidth / 2 + Math.random(),
          y: Math.sin(i / m * 2 * Math.PI) * 200 + svgFullHeight / 2 + Math.random()
        };
      if (!clusters[i] || (r > clusters[i].radius)) clusters[i] = d;
      return d;
    };

    function map_realnames_to_names(colormap) {
      var mapping = {}
      colormap.colors.forEach((d) => {
        let a = d.realname;
        let b = d.name;
        mapping[a] = b;
      });
      return mapping;
    };
    
    function map_realnames_to_hex(colormap) {
      var mapping = {}
      colormap.colors.forEach((d) => {
        let a = d.realname;
        let b = d.hex;
        mapping[a] = b;
      });
      return mapping;
    };

  };
  
  render() {
    console.log("render()");
    return (
      <div id={this.props.bubblePlotIdPrefix + "-" + this.props.bubblePlotIdSuffix} className="bubblePlot"></div>
    )
  }
}

export default BubblePlot;