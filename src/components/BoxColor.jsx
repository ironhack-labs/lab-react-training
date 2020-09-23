import React, { Component } from 'react';

export default class BoxColor extends Component {
  /* const colorbox = {
    backgroundColor: "rgb()"
  } */
  render() {
    return (
      <div>
        rgb({this.props.r},{this.props.g},{this.props.b})
      </div>
    );
  }
}
