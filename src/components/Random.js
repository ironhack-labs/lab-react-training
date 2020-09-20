import React from 'react';

class Random extends React.Component {
  render() {
    let result =
      Math.floor(Math.random() * (this.props.max - this.props.min)) +
      this.props.min;
    let text = `Random value between ${this.props.min} and ${this.props.max} => `;

    return (
      <div className=" box">
        {text} {result}
      </div>
    );
  }
}

export default Random;
