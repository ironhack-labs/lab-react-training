import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: props.imgs,
      currentImg: 0,
    };
  }

  handleRightClick = () => {
    this.setState({
      currentImg: (this.state.currentImg + 1) % this.state.imgs.length,
    });
  };
  handleLeftClick = () => {
    this.setState({
      currentImg:
        this.state.currentImg === 0
          ? this.state.imgs.length - 1
          : this.state.currentImg - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleLeftClick}>Left</button>
        <img src={this.state.imgs[this.state.currentImg]} />
        <button onClick={this.handleRightClick}>Right</button>
      </div>
    );
  }
}

export default Carousel;