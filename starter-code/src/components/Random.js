import React, { Component } from 'react';

class Random extends Component {
  render() {
    let randomValue = this.props.min + Math.floor(Math.random()*(this.props.max-this.props.min+1))
    return (
      <div className="random">
        Random value between {this.props.min}_and_{this.props.max}=>{randomValue}
      </div>
    );
  }
}

export default Random;