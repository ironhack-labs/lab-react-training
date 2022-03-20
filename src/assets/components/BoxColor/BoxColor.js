import React, { Component} from 'react';
import './BoxColor.css';

class BoxColor extends Component {
  constructor(props) {
    super(props);
      this.boxStyle = 
        `rgb(${this.props.r},${this.props.g},${this.props.b})`
      }

  
  render() {
   return (
      <div className="size-box" style={
        {backgroundColor: `${this.boxStyle}`}
        }>
        {this.boxStyle}
      </div>
   )
 }
}

 export default BoxColor;
