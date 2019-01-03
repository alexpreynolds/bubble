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

// Bubble plot
import BubblePlot from './BubblePlot';

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
    let contentParentHeight = parseInt(parseFloat(window.innerHeight) - 195) + "px";
    this.setState({
      height: windowInnerHeight,
      width: windowInnerWidth,
      contentParentHeight: contentParentHeight,
    }, () => { 
      console.log("W x H", this.state.width, this.state.height);
      console.log("Content parent H", this.state.contentParentHeight)
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
  
  render() {
    return (
      <div className="application" ref={ref => this.el = ref}>
      
        <div className="header">
      
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">
              <img src="./logo-inverse.svg" className="brand-content-logo" alt="altius-logo" href="https://www.altius.org" /> Index NMF Summary
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
                <h4>Index elements, by strongest NMF assignment (genome-wide)</h4>
                <div className="svg-container">
                  <Row style={{"height":this.state.contentHeight, zIndex:"-1000"}}>
                    <Col xs="10" className="gw-left">
                      <BubblePlot
                        data={this.state.applicationData}
                        svgWidth={this.state.contentParentHeight}
                        svgHeight={this.state.contentParentHeight} />
                    </Col>
                    <Col xs="2" className="gw-right">RIGHT</Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <h4>Index elements, by strongest NMF assignment (per chromosome)</h4>
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
                  JSON-formatted object containing a breakdown of NMF set and subset membership
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
