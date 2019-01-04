import React, { Component } from 'react';

// Bootstrap 4
import { 
  TabContent, 
  TabPane, 
  Nav, 
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem, 
  NavLink, 
  Button,
  Row, 
  Col,
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText } from 'reactstrap';
import classnames from 'classnames';

// Sliding panel
import SlidingPane from 'react-sliding-pane';
import Modal from 'react-modal';
import 'react-sliding-pane/dist/react-sliding-pane.css';

// Application constants
import * as Constants from './Constants.js';

// Bubble plot + components
import BubblePlot from './BubblePlot';
import Legend from './Legend';

// d3 CSV parser
import * as d3Dsv from 'd3-dsv';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
      isMenuOpen: false,
      isPaneOpen: false,
      applicationData: Constants.defaults.data,
      sliderData: Constants.defaults.data,
      height: props.height, 
      width: props.width,
      contentParentHeight: 0,
      contentParentWidth: 0,
      colormap: Constants.defaults.colormap,
      columnHeaders: "realname,chromosome,count"
    };
  }
  
  componentDidMount() {
    Modal.setAppElement(this.el);
    setTimeout(() => { this.updateViewportDimensions(); }, 100);
    window.addEventListener("resize", this.updateViewportDimensions);
  }
  
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateViewportDimensions);
  }
  
  updateViewportDimensions = () => {
    let windowInnerHeight = window.innerHeight + "px";
    let windowInnerWidth = window.innerWidth + "px";
    let contentParentHeight = parseInt(parseFloat(window.innerHeight) - 155) + "px";
    let contentParentWidth = parseInt(parseFloat(window.innerWidth) - 55) + "px";
    this.setState({
      height: windowInnerHeight,
      width: windowInnerWidth,
      contentParentHeight: contentParentHeight,
      contentParentWidth: contentParentWidth,
    }, () => { 
      console.log("W x H", this.state.width, this.state.height);
      console.log("Content parent H", this.state.contentParentHeight);
      console.log("Content parent W", this.state.contentParentWidth);
    })
  }
  
  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }
  
  copySliderDataToApplicationData = () => {
    this.setState({
      applicationData: this.state.sliderData
    });
  }
  
  filterDataByChromosomeAndReformatAsCSV = (c) => {
    var labeledData = this.state.columnHeaders + "\n" + this.state.applicationData;
    var data = d3Dsv.csvParse(labeledData);
    var filteredData = []
    data.forEach(function(d) {
      if (d.chromosome === c) {
        filteredData.push(d);
      }
    });
    var filteredDataRowsAsCSV = [];
    var headers = this.state.columnHeaders.split(',')
    filteredData.forEach((d) => {
      var values = []
      headers.forEach((h) => {
        values.push(d[h]);
      })
      filteredDataRowsAsCSV.push(values.join(','))
    });
    return filteredDataRowsAsCSV.join('\n');
  }
  
  splitDataIntoPerChromosomeGrid = () => {
    var rows = [];
    var chromosomes = Object.keys(Constants.genome_sizes[Constants.defaults.genome]);
    var collator = new Intl.Collator(undefined, {numeric: true, sensitivity: 'base'});
    var chromosomes_sorted = chromosomes.sort(collator.compare);
    var n = chromosomes_sorted.length;
    var r = Constants.defaults.rows;
    var c = Constants.defaults.cols;
    var w = parseInt((parseInt(this.state.contentParentWidth) / Constants.defaults.cols) - 23) + 'px';
    var h = parseInt((parseInt(this.state.contentParentHeight) / Constants.defaults.rows)) + 'px';
    console.log("this.state.contentParentWidth", this.state.contentParentWidth);
    console.log("this.state.contentParentHeight", this.state.contentParentHeight);
    console.log("cell w", w);
    console.log("cell h", h);
    let rowStyle = ".per-chromosome-row { height: " + h + "; margin-bottom: 10px; }";
    rows.push(<style>{ rowStyle }</style>);
    for (var row_idx = 0; row_idx < r; row_idx++) {
      var cells = [];
      for (var col_idx = 0; col_idx < c; col_idx++) {
        if (row_idx*c + col_idx < n) {
          var cell_offset = row_idx * c + col_idx;
          var cell_label = chromosomes_sorted[cell_offset];
          var cell_idx = cell_offset;
          var cell_data = this.filterDataByChromosomeAndReformatAsCSV(cell_label);
          cells.push(
            <div>
              <div className="per-chromosome-row-cell-header">{cell_label}</div>
              <BubblePlot
                bubblePlotIdPrefix="bubblePlot-perChromosome"
                bubblePlotIdSuffix={cell_idx}
                plotData={cell_data}
                plotDataColumnHeaders={this.state.columnHeaders}
                plotColormap={this.state.colormap}
                plotRadiusScaleFactor={1500}
                plotAttractStrength={0.1}
                plotClusterStrength={Constants.defaults.graph.clusterStrength}
                plotClusterCenterInertia={Constants.defaults.graph.clusterCenterInertia}
                svgWidth={w}
                svgHeight={h} />
            </div>
          );
        }
        else {
          cells.push("");
        }
      }
      rows.push(<Row className="per-chromosome-row">
        <Col xs={2} className="per-chromosome-row-cell">{cells[0]}</Col>
        <Col xs={2} className="per-chromosome-row-cell">{cells[1]}</Col>
        <Col xs={2} className="per-chromosome-row-cell">{cells[2]}</Col>
        <Col xs={2} className="per-chromosome-row-cell">{cells[3]}</Col>
        <Col xs={2} className="per-chromosome-row-cell">{cells[4]}</Col>
        <Col xs={2} className="per-chromosome-row-cell">{cells[5]}</Col>
      </Row>)
    }
    return rows;
  }
  
  render() {
    return (
      <div className="application" ref={ref => this.el = ref}>
      
        <div className="header">
      
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
              <img src="./logo-inverse.svg" className="brand-content-logo" alt="altius-logo" href="https://www.altius.org" /> Index Summary
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleMenu} />
            <Collapse isOpen={this.state.isMenuOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button color="primary" size="sm" onClick={() => { this.setState({ isPaneOpen: true }); document.activeElement.blur(); }}>Data</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        
          <Nav tabs className="tab-nav">
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggleTab('1'); }}
              >
                Genome-wide
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggleTab('2'); }}
              >
                Chromosome
              </NavLink>
            </NavItem>
          </Nav>
          
        </div>
        
        <TabContent activeTab={this.state.activeTab} className="tab-content">
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4 style={{textAlign:"center"}}>Index element cardinality, by strongest NMF assignment (genome-wide)</h4>
                <div className="svg-container">
                  <Row style={{"height":this.state.contentParentHeight}}>
                    <Col xs="12" className="gw-left">
                      <div className="bubblePlot-container">
                        <BubblePlot
                          bubblePlotIdPrefix="bubblePlot"
                          bubblePlotIdSuffix="1"
                          plotData={this.state.applicationData}
                          plotDataColumnHeaders={this.state.columnHeaders}
                          plotColormap={this.state.colormap}
                          plotRadiusScaleFactor={1250}
                          plotAttractStrength={Constants.defaults.graph.attractStrength}
                          plotClusterStrength={Constants.defaults.graph.clusterStrength}
                          plotClusterCenterInertia={Constants.defaults.graph.clusterCenterInertia}
                          svgWidth={this.state.contentParentWidth}
                          svgHeight={this.state.contentParentHeight} />
                      </div>
                      <Legend
                        style={{zIndex: 1000}}
                        colormap={this.state.colormap} />
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4 style={{textAlign:"center"}}>Index element cardinality, by strongest NMF assignment (per chromosome)</h4>
                <div className="svg-container">
                  <Row style={{"height":this.state.contentParentHeight}}>
                    <Col xs="12" className="gw-left">
                      <div className="bubblePlot-container">
                        { this.splitDataIntoPerChromosomeGrid() }
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        
        <SlidingPane
          className='sliding-pane-custom'
          isOpen={ this.state.isPaneOpen }
          title='Data'
          onRequestClose={() => { 
            this.setState({ 
              isPaneOpen: false 
            }, () => {
              this.copySliderDataToApplicationData();
            }); 
          }}>
          <div>
            <Form>
              <FormGroup>
                <Label for="applicationDataTextarea">Application Data</Label>
                <Input 
                  type="textarea" 
                  name="sliderData" 
                  id="applicationDataTextarea" 
                  className="application-data-textarea" 
                  value={this.state.sliderData}
                  onChange={(e) => { 
                    let value = e.target.value;
                    let name = e.target.name;
                    this.setState({ [name] : value }); 
                  }}
                  />
                <FormText color="muted">
                  CSV containing a breakdown of set and subset membership (name, chromosome, count)
                </FormText>
              </FormGroup>
              <Button 
                color="primary" 
                size="sm" 
                onClick={() => { 
                  this.setState({ 
                    isPaneOpen: false 
                  }, () => {
                    this.copySliderDataToApplicationData();
                  }); 
                  document.activeElement.blur(); 
                }}>Update</Button>
            </Form>
          </div>
        </SlidingPane>
            
      </div>
    );
  }
}

export default App;
