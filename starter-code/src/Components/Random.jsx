import React, { Component } from "react";

function Random(props) {
 const randomNumber = parseInt(Math.random() * props.max + props.min);
 return (
   <div>
    <p className="idcard">Random value between {props.min} and {props.max} => {randomNumber}</p>
   </div>
 );
}

export default Random;