import React from 'react';
import './Random.css';

export default class Random extends React.Component {
  render() {
    const { min, max } = this.props;
    const number = () => {
      return Math.floor(Math.random() * max - min + 2);
    };

    return (
      <div className="Random">
        <h1>
          Random value between {min} and {max} {'=>'} <span>{number()}</span>
        </h1>
      </div>
    );
  }
}
