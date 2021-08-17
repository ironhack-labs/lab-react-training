import React from 'react';

class BoxColor extends React.Component {
  render() {
    let r = this.props.r;
    let g = this.props.g;
    let b = this.props.b;

    const styleObj = {
      color: r + g + b <= 255 ? 'white' : 'black',
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      border: '1px solid black',
      marginTop: '2vh',
      textAlign: 'center',
    };
    return (
      <div style={styleObj}>
        <p>
          rgb({r},{g},{b})
        </p>
      </div>
    );
  }
}
export default BoxColor;
