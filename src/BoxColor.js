import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BoxColor extends React.Component {
  render() {
    const divStyle = {
      backgroundColor:'rgb(' + this.props.r + ',' + this.props.g + ',' + this.props.b + ')',
      padding: `30px`,
      border: `2px solid white`,
      margin: `10px`,
    };

    return (
      <div style={divStyle}>
        rgb({this.props.r},{this.props.g},{this.props.b})
      </div>
    );
  }
}

export default BoxColor;
