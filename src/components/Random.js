import React, { Component } from 'react';

class Random extends Component{
   
    
    render(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; 
          }
          const {min, max, text} = this.props;

        return(
             <div>{text} => {getRandomInt(min,max)}</div>
        )
    }
}




export default Random;