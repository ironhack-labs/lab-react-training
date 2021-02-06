import React from 'react';

class BoxColorClass extends React.Component {
  constructor(props) {
    super(props);
    this.r = this.props.r;
    this.g = this.props.g;
    this.b = this.props.b;
    this.txtcolor = this.props.txtcolor;
  }
  rgbToHex = (r, g, b) => {
    let r2 = this.r.toString(16);
    let g2 = this.g.toString(16);
    let b2 = this.b.toString(16);

    if (r2.length === 1) r2 = '0' + r2;
    if (g2.length === 1) g2 = '0' + g2;
    if (b2.length === 1) b2 = '0' + b2;

    return '#' + r2 + g2 + b2;
  };
  render() {
    return (
      <div
        className="boxColor"
        style={{
          backgroundColor: `rgb(${this.r}, ${this.g}, ${this.b})`,
          color: this.txtcolor,
        }}
      >
        <p>{`rgb(${this.r}, ${this.g}, ${this.b})`}</p>
        <p>{this.rgbToHex(this.r, this.g, this.b)}</p>
      </div>
    );
  }
}

export default BoxColorClass;
