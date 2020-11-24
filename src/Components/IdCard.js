//1. Import
import React, { Component } from 'react';
import '../IdCard.css'

// 2. Function || Class & Export
export default class IdCard extends Component {
  render() {
    return (
    <div className="IdContainer">
      <div className="image">
        <img src={this.props.picture} alt="{this.props.firstName}"/>
        <div className="info">
          <strong>First name</strong>: {this.props.firstName} <br/>
          <strong>Last name</strong>: {this.props.lastName} <br/>
          <strong>Gender</strong>: {this.props.gender} <br/>
          <strong>Height</strong>: {this.props.height}m <br/>
          <strong>Birth</strong>: {this.props.birth} <br/>
        </div>
      </div>
    </div>
    );
  }
}