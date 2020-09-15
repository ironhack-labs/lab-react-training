import React, {Component} from "react"

class BoxColor extends Component{
   rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16)
    return hex.length < 2 ? "0"+ hex : hex
  } 

  render(){
    const style = { backgroundColor : `rgb(${this.props.r}, ${this.props.g}, ${this.props.b})`}
    return(
      <div><div className="box color" style={style}>rgb({this.props.r}, {this.props.g}, {this.props.b}) <br/>#{this.rgbToHex(this.props.r)}{this.rgbToHex(this.props.g)}{this.rgbToHex(this.props.b)}</div></div>
    )
  }
}

export default BoxColor

