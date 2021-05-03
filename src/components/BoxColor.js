import React from 'react';

class BoxColor extends React.Component {
    render(){
        const {r,g,b} = this.props
        const divStyle = {
        backgroundColor: `rgb(${r},${g},${b})`,
        width:`100vw`}
        return (
            <div style={divStyle}>{`rgb(${r},${g},${b})`}</div>
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