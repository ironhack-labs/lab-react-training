// imports
import React from 'react';

//components
class Carousel extends React.Component {
  state = {
    counter: 0,
  };
  nextPhoto() {
    if (this.state.counter === 3) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ ...this.state, counter: this.state.counter + 1 });
    }
  }
  prevPhoto() {
    if (this.state.counter === 0) {
      this.setState({ counter: 3 });
    } else {
      this.setState({ ...this.state, counter: this.state.counter - 1 });
    }
  }
  render() {
    return (
      <div className="card">
        <img src={this.props.imgs[this.state.counter]} alt="Citicien" />
        <button onClick={() => this.nextPhoto()}>+</button>
        <button onClick={() => this.prevPhoto()}>-</button>
      </div>
    );
  }
}

// exports
export default Carousel;
