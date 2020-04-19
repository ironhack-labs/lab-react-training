import React, { Component } from "react";
import Random from '../Random';

export default class Iteration3 extends Component {
  render() {
    return (
      <div>
          <h1> Random  (Iteration 3)</h1>
          <Random min={1} max={6}/>
          <Random min={1} max={100}/>
      </div>
    );
  }
}