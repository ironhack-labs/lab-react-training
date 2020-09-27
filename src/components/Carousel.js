import React from 'react';

export default class Carousel extends React.Component {
  index = 0;
  state = {
    count: 0,
  };
  nextImage = () => {
    this.setState({
      count:
        this.state.count === this.props.imgs.length - 1
          ? 0
          : this.state.count + 1,
    });
  };
  prevImage = () => {
    this.setState({
      count:
        this.state.count === 0
          ? this.props.imgs.length - 1
          : this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button className="Carousel" onClick={() => this.prevImage()}>
          {' '}
          left{' '}
        </button>
        <img src={this.props.imgs[this.state.count]} />
        <button className="Carousel" onClick={() => this.nextImage()}>
          {' '}
          right{' '}
        </button>
      </div>
    );
  }
}
