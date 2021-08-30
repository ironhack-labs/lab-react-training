import React from 'react';
import './Random.css';

class Random extends React.Component {
   
  render() {
    let min = this.props.min;
    let max = this.props.max;
    let getRandomValue = Math.floor(Math.random() * (max - min + 1) + min);
      return <div className="random">
            <p>Random value between {min} and {max} => {getRandomValue}</p>
        </div>
  }
}

export default Random;
