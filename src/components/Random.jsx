import React, {Component} from 'react';

 class Random extends Component{
     render() {
       return (
            <div>  Random value between {this.props.min} and {this.props.max} = {Math.floor(Math.random() * (this.props.max - this.props.min) + this.props.min)}
            </div>
       )
  }
 }
 export default Random;

//OLD WAY
//  const Random =(props) => {
//      let randomValue= Math.floor(Math.random()* ({props.max} - {props.min} + 1) + {props.mix})
//      return (
//          <div>
//              Random Value Between {props.min} and {props.max} => {randomValue}
//          </div>
//      )
//  }