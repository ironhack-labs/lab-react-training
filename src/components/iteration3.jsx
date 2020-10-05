import React from "react";

//ITERATION 3
// function Random(min, max) {
//     var max = 6;
//     var min = 0;
//     var randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
//     return <div> <strong>Random value between 1 and 6:</strong> {randomNumber}</div>;
//   }

function Random (props){
  var randomNumber = Math.floor(Math.random() * (props.max - props.min + 1) + props.min);
  if(props.min === 0 && props.max === 6){
    return <div> <strong>Random value between 1 and 6:</strong> {randomNumber}</div>;

  }else {
    return <div> <strong>Random value between 1 and 100:</strong> {randomNumber}</div>
  }
} 
export default Random;