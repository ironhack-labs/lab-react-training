import React, { Component } from 'react';

class RandomComp extends Component {



  render() { 
    let randomNumber =  Math.floor(Math.random() * (this.props.max - this.props.min)) +  this.props.min
    return ( 
      <div className="card mt-2">
        <div className="card-body">
        <p>Random value between {this.props.min} and {this.props.max} ==> {randomNumber} </p>
      </div>
    </div>

     );
  }
}
 
export default RandomComp;