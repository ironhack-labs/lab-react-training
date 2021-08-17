import React from 'react';

class Random extends React.Component {
  values = {
    min: 1,
    max: 6,
  };

  randomValue = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };

  render() {
    return (
      <>
        <h1>Random</h1>
        <div className="singleCard">
          <p>
            {'Random Value between ' +
              this.values.min +
              ' and ' +
              this.values.max +
              ' => ' +
              this.randomValue(this.values.min, this.values.max)}
          </p>
        </div>
      </>
    );
  }
}

export { Random };
