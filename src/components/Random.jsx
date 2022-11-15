import React from "react";

function Random (props){
    const {min, max} = props;
   function randomNum(min, max){
    return Math.floor(Math.random() * (max-min +1)+min);
   }
    return (

        <p className="random">Random value between {min} and {max} is {randomNum(min, max)}</p>

    );
}
export default Random