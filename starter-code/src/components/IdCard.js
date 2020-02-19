import React, { Component } from "react";

export default class IdCard extends Component { 
  render() {
    return (
      <div id="Card">
        <img src={this.props.picture} alt={this.props.firstname} />
        <div>
            <p><span>First name: </span>{this.props.firstName}</p>
            <p><span>Last name: </span>{this.props.lastName}</p>
            <p><span>Gender: </span>{this.props.gender}</p>
            <p><span>Height: </span>{this.props.height}</p>
            <p><span>Birth: </span>{this.props.birth.toDateString()}</p>
        </div>
      </div>
    );
  }
}