import React, { Component } from 'react';

import './Caroussel.css';

class Caroussel extends Component {
  state = {
    currentImg: 0
  }

  decreaseArray = () => {
    if (this.state.currentImg === 0) {
      this.setState({
        currentImg: this.props.imgs.length - 1
      })
    } else {
      this.setState({
        currentImg: this.state.currentImg - 1
      })
    }
  }

  increaseArray = () => {
    if (this.state.currentImg === this.props.imgs.length - 1) {
      this.setState({
        currentImg: 0
      })
    } else {
      this.setState({
        currentImg: this.state.currentImg + 1
      })
    }
  }

  render() {
    return (
      <div className="caroussel-container">
        <img src={this.props.imgs[this.state.currentImg]} alt="random caroussel" />
        <div>
          <div className="caroussel-button" onClick={(e) => this.decreaseArray()}>{'<='}</div>
          <div className="caroussel-button" onClick={(e) => this.increaseArray()}>{'=>'}</div>
        </div>
      </div>
    );
  }
}

export default Caroussel;