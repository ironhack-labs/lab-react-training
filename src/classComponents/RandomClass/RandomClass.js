import React from 'react';

class RandomClass extends React.Component {
  constructor(props) {
    super(props);
    this.min = this.props.min;
    this.max = this.props.max;
    this.random = 0;
  }

  setRandom(min, max) {
    this.random = Math.floor(Math.random() * max) + min;
    return this.random;
  }

  render() {
    return (
      <p className="withBorder">
        Random value between {this.min} and {this.max} =&gt;{' '}
        {this.setRandom(this.min, this.max)}
      </p>
    );
  }
}

export default RandomClass;
