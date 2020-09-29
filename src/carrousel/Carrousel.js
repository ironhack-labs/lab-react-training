import React from 'react';
import './Carrousel.css';

const images = [
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/men/1.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
];

class Carrousel extends React.Component {
  state = {
    currentIndex: 0,
  };

  handlePictureLeft = () => {
    this.state.currentIndex <= 0
      ? this.setState({
          currentIndex: 0,
        })
      : this.setState({ currentIndex: this.state.currentIndex - 1 });
  };

  handlePictureRight = () => {
    this.state.currentIndex >= 3
      ? this.setState({
          currentIndex: 0,
        })
      : this.setState({ currentIndex: this.state.currentIndex + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePictureLeft}>Left</button>
        <img src={images[this.state.currentIndex]} alt="carousel" />
        <button onClick={this.handlePictureRight}>Right</button>
      </div>
    );
  }
}

export default Carrousel;
