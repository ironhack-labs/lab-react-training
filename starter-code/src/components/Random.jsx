import React, { Component } from 'react';
import RandomComp from './RandomComp'

class Random extends Component {
  state = { 
    randoms: [
      {
      min: 1,
      max: 6
    }, {
      min:1,
      max: 100
    }
    ]
   }

  //  handleRandom = () => {
  //    let x = this.state.randoms.min
  //    let y = this.state.randoms.max
  //    const randomNumber = Math.random() * (y-x) + x
  //    console.log(randomNumber)
  //    return randomNumber


  //    let randomValue = this.props.min + Math.floor(Math.random() * (this.props.max - this.props.min + 1));
  //  }

  render() { 


    return ( 
    <div>
      {this.state.randoms.map((random, index) => {
        return (<RandomComp key={index} min={random.min} max={random.max} />
      )
      })}
    </div>

    
      );
  }
}
 
export default Random;

