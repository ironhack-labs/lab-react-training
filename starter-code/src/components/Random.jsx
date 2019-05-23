import React, {Component} from 'react';
import RandomComp from './RandomComp';

class Random extends Component {
  state = {
    randoms: [
      {
        min: 1,
        max: 6,
      },
      {
        min: 1,
        max: 100,
      },
    ],
  };

  render () {
    return (
      <div>
        {this.state.randoms.map ((random, index) => {
          return <RandomComp key={index} min={random.min} max={random.max} />;
        })}
      </div>
    );
  }
}

export default Random;
