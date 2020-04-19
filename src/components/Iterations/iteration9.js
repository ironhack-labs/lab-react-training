import React, { Component } from "react";
import ClickablePicture from '../ClickablePicture';

export default class Iteration9 extends Component {
  render() {
    return (
      <div>
          <h1> ClickablePicture (Iteration 9)</h1>
          <ClickablePicture img='/img/persons/maxence.png' imgClicked='/img/persons/maxence-glasses.png' />
      </div>
    );
  }
}