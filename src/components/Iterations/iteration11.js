import React, { Component } from "react";
import Carousel from '../Carousel';

export default class Iteration11 extends Component {
  render() {
    return (
      <div>
          <h1> Carrousel (Iteration 11)</h1>
          <Carousel
            imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
            ]}
          />
      </div>
    );
  }
}