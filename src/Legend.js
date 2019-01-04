import React from 'react';

// Application constants
import * as Constants from './Constants.js';

class Legend extends React.Component {
  constructor(props) {
    super(props);
  }
  
  legendItems = () => {
    let colormap = Constants[this.props.colormap];
    let name = colormap.name;
    let colors = colormap.colors;
    let result = <h6>{name}</h6>    
    let colorItems = colors.map((d) => {
      return <div><span style={{backgroundColor:d.hex, width:"30px"}}>&nbsp;&nbsp;&nbsp;&nbsp;</span> {d.name}</div>
    });
    return <div>{result}{colorItems}</div>;
  } 
  
  render() {
    let legend = this.legendItems();
    return (
      <div id="legend">
        {legend}
      </div>
    )
  }
}

export default Legend;