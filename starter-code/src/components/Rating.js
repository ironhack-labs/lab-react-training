import React, { Component } from "react";

export default class Rating extends Component { 
  render() {
    return (
      <div id="stars">
        <p>{Math.round(this.props.children)>=1 ? '★':'☆'}
        {Math.round(this.props.children)>=2 ? '★':'☆'}
        {Math.round(this.props.children)>=3 ? '★':'☆'}
        {Math.round(this.props.children)>=4 ? '★':'☆'}
        {Math.round(this.props.children)>=5 ? '★':'☆'}</p>
      </div>
    );
  }
}