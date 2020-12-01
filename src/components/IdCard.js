import React, { Component } from 'react';

export default class IdCard extends Component {
  render() {
    //   console.log(this.props);
    return (
      <div className="IdCard">
        <img src={this.props.picture} alt=""/>
        <h2>First Name:</h2> {this.props.firstName}
        <h2>Last name:</h2> {this.props.lastName}
        <h2>Gender: </h2>{this.props.gender}
        <h2>Height: </h2>{this.props.height}
        <h2>Birth: </h2>{this.props.birth.toLocaleDateString()}
      </div>
    );
  }
}
