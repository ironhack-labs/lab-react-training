import React, { Component } from 'react';

export default class Rating extends Component {
  render() {
    return (
      <div className="rating">
        {this.props.children <= 0.5 ? '☆' : '★'}
        {this.props.children <= 1.5 ? '☆' : '★'}
        {this.props.children <= 2.5 ? '☆' : '★'}
        {this.props.children <= 2.5 ? '☆' : '★'}
        {this.props.children <= 4.5 ? '☆' : '★'}
      </div>
    );
  }
}
