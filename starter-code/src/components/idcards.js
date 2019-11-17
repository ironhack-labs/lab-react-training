import React, { Component } from 'react';

class IdCard extends Component {
  
  render() {
    return (
      <div className="IdCard box">
      <img src={this.props.picture} alt="" />
        <div className="right">
          <h2><strong>First name</strong>: {this.props.firstName}</h2>
          <h2><strong>Last name</strong>: {this.props.lastName}</h2>
          <h2><strong>Gender</strong>: {this.props.gender}</h2>
          <h2><strong>Height</strong>: {this.props.height}</h2>
          <h2><strong>Birth</strong>: {this.props.birth.toDateString()}</h2>
        </div>
      </div>
    )
  }
}

export default IdCard;
