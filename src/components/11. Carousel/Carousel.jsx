import { Component } from 'react';

export default class Carousel extends Component {
  state = {
    arrayPosition: 0,
  };
  carousel(delta) {
    let length = this.props.imgs.length;
    this.setState((previous) => ({
      arrayPosition: (previous.arrayPosition + delta + length) % length,
    }));
  }

  render() {
    let src = this.props.imgs[this.state.arrayPosition];
    return (
      <div>
        {' '}
        <button
          className="btn btn-secondary mr-2"
          onClick={() => this.carousel(-1)}
        >
          Left
        </button>
        <img src={src} />
        <button
          className="btn btn-secondary ml-2"
          onClick={() => this.carousel(+1)}
        >
          Right
        </button>
      </div>
    );
  }
}
