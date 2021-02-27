import React from 'react';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Random extends React.Component {
  render() {
    return (
      <div class="boxFrame">
        Random value between {this.props.min} and {this.props.max}
        {'=> ' + getRandomInt(this.props.min, this.props.max)}
      </div>
    );
  }
}

export default Random;
