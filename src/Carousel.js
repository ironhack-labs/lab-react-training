import React from 'react';

export default class Carousel extends React.Component {
  constructor(state, props) {
    super(props);
    this.state = {
      img: 0,
    };
  }
  clickUp = () => {
    this.setState({
      img: clamp(this.state.img + 1, 0, 3),
    });
  };
  clickDown = () => {
    this.setState({
      img: clamp(this.state.img - 1, 0, 3),
    });
  };

  render() {
    return (
      <div className="Carousel">
        <img src={this.props.imgs[this.state.img]} alt="pic" />
        <button onClick={this.clickUp}>PRESS UP</button>
        <button onClick={this.clickDown}>PRESS DOWN</button>
      </div>
    );
  }
}

function clamp(val, min, max) {
  return val > max ? min : val < min ? max : val;
}
