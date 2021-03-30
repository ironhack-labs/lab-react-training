import { Component } from 'react';

class Carousel extends Component {
  state = {
    counter: 0,
  };

  pictures = [...this.props.imgs];

  increaseCounter = () => {
    this.setState((state) =>
      this.state.counter >= this.pictures.length - 1
        ? { counter: 0 }
        : {
            counter: state.counter + 1,
          }
    );
  };

  decreaseCounter = () => {
    this.setState((state) =>
      this.state.counter <= 0
        ? { counter: this.pictures.length - 1 }
        : {
            counter: state.counter - 1,
          }
    );
  };

  render() {
    return (
      <div className="Carousel">
        <button onClick={this.decreaseCounter}>Left</button>
        <img src={this.pictures[this.state.counter]} alt="Carousel" />
        <button onClick={this.increaseCounter}>Right</button>
      </div>
    );
  }
}

export default Carousel;
