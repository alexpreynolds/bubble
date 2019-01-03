import React from 'react';
import * as d3 from 'd3';

class BubblePlot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data : this.props.data,
      svgWidth : 600,
      svgHeight : 600,
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
    if (this.props.data !== prevProps.data) {
      console.log("data changed");
      this.renderData();
    }
    else if ((this.props.svgWidth !== prevProps.svgWidth) || (this.props.svgHeight !== prevProps.svgHeight)) {
      console.log("svgWidth or svgHeight changed");
      if (this.state.data) {
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
    var self = this;
    
    // parameters
    const margin = this.state.svgMargin;
    const svgFullWidth = parseInt(this.state.svgWidth);
    const svgFullHeight = parseInt(this.state.svgHeight);
    const padding = 1.5; // separation between same-color nodes
    const clusterPadding = 6; // separation between different-color nodes
    const maxRadius = 12;
    const color = d3.scaleOrdinal().range(["#7A99AC", "#E4002B"]);
      
    // cleanup
    const svgChild = d3.select('svg');
    if (svgChild) {
      svgChild.remove();
    }
    
    // begin
    const svg = d3.select('#bubblePlot')
      .append('svg')
      .attr("width", svgFullWidth + parseInt(margin.left) + parseInt(margin.right))
      .attr("height", svgFullHeight + parseInt(margin.top) + parseInt(margin.bottom))
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    // demo
    var colNames = "text,size,group\n" + this.state.data;
    var data = d3.csv.parse(colNames);
    data.forEach(function(d) {
      d.size = +d.size;
    });

    // unique cluster/group id's
    var cs = [];
    data.forEach(function(d){
      if (!cs.contains(d.group)) {
        cs.push(d.group);
      }
    });
    
  };
  
  render() {
    console.log("render()");
    return (
      <div id="bubblePlot"></div>
    )
  }
}

export default BubblePlot;