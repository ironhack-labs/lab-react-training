import React from 'react';

class BoxColor extends React.Component {
    render(){
        const rgbToHex = function (rgb) {
          let hex = Number(rgb).toString(16);
          if (hex.length < 2) {
            hex = '0' + hex;
          }
          return hex;
        };
        const {r,g,b} = this.props
        const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width:`100vw`}
        return (
            <div style={divStyle}> <p>{`rgb(${r},${g},${b})`}</p><p>{rgbToHex(r)+rgbToHex(g)+rgbToHex(b)}</p></div>
      );
    }
  }
  
  export default BoxColor;

/*   const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>; */
/* } */