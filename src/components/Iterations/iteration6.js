import React, { Component } from "react";
import Rating from '../Rating';

export default class Iteration6 extends Component {
  render() {
    return (
      <div>
          <h1> Rating (Iteration 6)</h1>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
      </div>
    );
  }
}