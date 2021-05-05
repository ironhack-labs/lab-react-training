import React, { Component } from 'react';

export default class IdCard extends Component {
  render() {
    return (
      <div className="Row">
        <img src={this.props.picture} alt="profile pic" />
        <ul>
          <li>{this.props.firstName}</li>
          <li>{this.props.lastName}</li>
          <li>{this.props.gender}</li>
          <li>{this.props.birth}</li>
          <li>{this.props.height}</li>
        </ul>
      </div>
    );
  }
}
