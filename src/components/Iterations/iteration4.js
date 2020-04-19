import React, { Component } from "react";
import BoxColor from '../BoxColor';

export default class Iteration4 extends Component {
  render() {
    return (
      <div>
          <h1> BoxColor (Iteration 4)</h1>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
      </div>
    );
  }
}