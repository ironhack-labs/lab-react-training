import React, { Component } from "react";
import './IdCard.css';

class IdCard extends Component {
  render(){
    const { birth } = this.props;
    return (
      <div className="Idcard">
        <div>
          <img src={this.props.picture} alt={this.props.firstName}></img>
        </div>
        <div className="Idcard-info">
          <span><strong>First name:</strong> {this.props.firstName}</span>
          <span><strong>Last name:</strong> {this.props.lastName}</span>
          <span><strong>Gender:</strong> {this.props.gender}</span>
          <span><strong>Height:</strong> {this.props.height}m</span>
          <span><strong>Birth:</strong> {birth.toDateString()}</span>
        </div>
      </div>
    )
  }
}

export default IdCard;