import React, { Component } from "react";
import NumbersTable from '../NumbersTable';

export default class Iteration12 extends Component {
  render() {
    return (
      <div>
          <h1> List and Keys (Iteration 12)</h1>
          <NumbersTable limit={12} />
      </div>
    );
  }
}