import React from 'react';
import './DriverCard.css';
import { filledStars } from '../rating/Rating';

export default class DriverCard extends React.Component {
  render() {
    return (
      <div className="Card2">
        <div className="UserImage">
          <img className="Image2" src={this.props.img} />
        </div>
        <div className="UserInfo2">
          <div className="userinfo-container">
            <span className="label2">First Name: </span>
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
