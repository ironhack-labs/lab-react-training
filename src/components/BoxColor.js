import React from "react"
import { Card } from 'antd';

const BoxColor = (props) => {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

 return (
  <Card style={{ backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`, width: 300 }}>
      <p>rgb({props.r}, {props.g}, {props.b})</p>
      <p>{rgbToHex(props.r, props.g, props.b)}</p>
    </Card>
 )
}

export default BoxColor