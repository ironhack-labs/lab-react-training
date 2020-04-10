import React, { Component } from 'react';

class Random extends Component{
	render () {
    const { min, max } = this.props;
    return (
      <div >
        <p>Random number between {min} and {max} => { Math.floor(Math.random() * max) + min }</p>
      </div>
    )
  }
}

export default Random;