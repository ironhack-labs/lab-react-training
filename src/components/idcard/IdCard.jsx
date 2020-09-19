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
          <span>{this.props.firstName}</span>
          <span>{this.props.lastName}</span>
          <span>{this.props.gender}</span>
          <span>{this.props.height}</span>
          <span>{new Date(this.props.birth).toUTCString().toString()}</span>
        </div>
      </div>
    );
  }
}
