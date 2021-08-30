import React from 'react';
import './BoxColor.css';

class BoxColor extends React.Component {
  render() {
    let r = this.props.r;
    let g = this.props.g;
    let b = this.props.b;

    const colorObj = {
      color: r + g + b <= 255 ? 'white' : 'black',
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
    };
    return <div className="boxColor" style={colorObj}>
        <p>rgb({r},{g},{b})</p>
    </div>;
  }
}

export default BoxColor;
