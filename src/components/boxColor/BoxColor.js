import React, {Component} from 'react';
import './index.css';

class BoxColor extends Component {

  _componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  _rgbToHex(r, g, b) {
    return "#" + this._componentToHex(r) + this._componentToHex(g) + this._componentToHex(b);
  }

  render() {
    const {r,g,b} = this.props;
    return (
      <div className={'boxColor'} style={{'background': `rgb(${r},${g},${b})`}}>
        <p>rgb({r},{g},{b})</p>
        <p>{this._rgbToHex(r,g,b)}</p>
      </div>
    );
  }
}

export default BoxColor;