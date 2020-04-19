import React, { Component } from "react";
import Greetings from '../Greetings';

export default class Iteration2 extends Component {
  render() {
    return (
      <div>
          <h1> Greetings (Iteration 2)</h1>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
      </div>
    );
  }
}