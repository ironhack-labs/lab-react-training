import React from 'react';
import './DriverCard.css';
import { filledStars } from '../rating/Rating';

export default class DriverCard extends React.Component {
  render() {
    return (
      <div className="Card">
        <div className="UserImage">
          <img className="Image" src={this.props.img} />
        </div>
        <div className="UserInfo">
          <div className="userinfo-container">
            <span className="label">First Name: </span>
            <span className="data">{this.props.name}</span>
          </div>
          <div>
            <p>{filledStars(Math.round(this.props.rating))}</p>
          </div>
          <div className="userinfo-container">
            <span className="data">
              {this.props.car.model} - {this.props.car.licensePlate}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
