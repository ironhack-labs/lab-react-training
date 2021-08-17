import React from 'react';

class Random extends React.Component {
  render() {
    let min = this.props.min;
    let max = this.props.max;
    let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return (
      <div className="random">
        <p>
          Random value between {min} and {max} => {randomNumber}
        </p>
      </div>
    );
  }
}
export default Random