import React, { Component } from "react";

class IdCard extends Component {
  render() {
    return (
      <div className="idcard">
        <div className="idcard-body">
          <div className="description"><b>First Name:</b><p className="idcard-firstName">{this.props.firstName}</p></div>
          <div className="description"><b>Last Name:</b><p className="idcard-lastName">{this.props.lastName}</p></div>
          <div className="description"><b>Gender:</b><p className="idcard-gender">{this.props.gender}</p></div>
          <div className="description"><b>Height:</b><p className="idcard-height">{this.props.height}</p></div>
          <div className="description"><b>Birth:</b><p className="idcard-birth">{this.props.birth}</p></div>
        </div>
        <img src={this.props.img} className="idcard-img" alt="profileimg"/>
      </div>
    );
  }
}

export default IdCard;

