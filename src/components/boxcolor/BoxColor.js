import React, {Component} from 'react'
import '../boxcolor/BoxColor.css'

// r: A number between 0 and 255 representing the amount of red
// g: A number between 0 and 255 representing the amount of green
// b: A number between 0 and 255 representing the amount of blue

class BoxColor extends Component{
  pickColor(props){
    const {r, g, b} = props;
    const style = { 
      background: `rgb(${r},${g},${b})`,
      border: '1px solid',
      fontSize: '30px',
      margin: '20px 30px',
      textAlign: 'center',
      padding: '30px',
   };
    return style
  }
  render(){
    const {r, g, b} = this.props;
    return(
      <div style={this.pickColor(this.props)}>RGB:({r},{g},{b})</div>
    )
  }
}



export default BoxColor