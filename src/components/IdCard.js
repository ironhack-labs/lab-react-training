import React, { Component } from 'react';
import Avatar from './Avatar';

class IdCard extends Component {
  render() {
    return (
      <div className="card">
        <Avatar src={this.props.picture} width="150px" />
        <div className="cardItem">
          <div>
            <label className="cardLabel">First Name:&nbsp;</label>
            <span>{this.props.firstName}</span>
          </div>
          <div>
            <label className="cardLabel">Last Name:&nbsp;</label>
            <span>{this.props.lastName}</span>
          </div>
          <div>
            <label className="cardLabel">Gender:&nbsp;</label>
            <span>{this.props.gender}</span>
          </div>
          <div>
            <label className="cardLabel">Height:&nbsp;</label>
            <span>{this.props.height}</span>
          </div>
          <div>
            <label className="cardLabel">Birth:&nbsp;</label>
            <span>{this.props.birth.toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    );
  }
}
export default IdCard;
