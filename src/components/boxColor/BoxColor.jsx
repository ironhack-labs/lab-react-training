import React from 'react';
import './BoxColor.css';

class BoxColor extends React.Component {

   componentToHex(c) {
    var hex = c.toString(16);
    
    return hex.length === 1 ? "0" + hex : hex;
  }
  
  rgbToHex() {
    
    return "#" + this.componentToHex(this.props.r) + this.componentToHex(this.props.g) + this.componentToHex(this.props.b);
  } 

  getContrastYIQ(hexcolor){
    hexcolor = hexcolor.slice(1);
    var r = parseInt(hexcolor.substr(0,2),16);
    var g = parseInt(hexcolor.substr(2,2),16);
    var b = parseInt(hexcolor.substr(4,2),16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
  }
    
  

  render() {
    return (
      <div className="card box color" style={{backgroundColor : "rgb(" + this.props.r +","+ this.props.g +","  +this.props.b +")"}}>
        <p style={{ color:  this.getContrastYIQ(this.rgbToHex() )}}>{"rgb(" + this.props.r +","+ this.props.g +","  +this.props.b +")"}</p>
        <p style={{ color:  this.getContrastYIQ(this.rgbToHex() )}}>{this.rgbToHex()}</p>
       
      </div>
    );
  }
}
export default BoxColor;
