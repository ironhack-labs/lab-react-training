import React, { Component } from 'react';

class Random extends Component {
  render(){
    const { min, max } = this.props;
    function random(){
      return Math.floor(Math.random() * max) + min;
    }
    return(
      <div className="Box">
        <p>Random value between {min} and {max} => {random()}</p>
      </div>
    )
  }
}

export default Random;