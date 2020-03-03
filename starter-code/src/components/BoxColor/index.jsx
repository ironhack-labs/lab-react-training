import React, { Component } from 'react';
{/* <BoxColor r={255} g={0} b={0} /> */}


class BoxColor extends Component {
  render() {

    const { r,
            g,
            b} = this.props;

    const divStyle = {
        color: 'blue',
        backgroundColor: 'rgb('+r+','+g+','+b+')',
        width: '50%',
        height:'4em'
    };

    return( 
      <div style={divStyle}>
        <p>rgba({r},{g},{b})</p>
      </div>
    );
  }
};


export default BoxColor;