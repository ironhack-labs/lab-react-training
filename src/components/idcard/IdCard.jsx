import React from 'react';
import './IdCard.css';

export default class IdCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="UserImage">
          <img className="Image" src={this.props.picture} />
        </div>
        <div className="UserInfo">
          <div className="userinfo-container">
            <span className="label">First Name: </span>
            <span className="data">{this.props.firstName}</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Last Name: </span>
            <span className="data">{this.props.lastName}</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Gender: </span>
            <span className="data">{this.props.gender}</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Height: </span>
            <span className="data">{this.props.height/100}m</span>
          </div>
          <div className="userinfo-container">
            <span className="label">Birth Date: </span>
            <span className="data">
              {this.props.birth.toDateString()}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
