import React, { Component } from "react";
import "./IdCard.css";

class IdCard extends Component {
  render() {
    const { lastName, firstName, gender, height, birth, picture } = this.props;
    return (
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img className="img-fluid" src={picture} alt="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">
                <span className="font-weight-bold">First Name: </span>
                {firstName}
              </p>
              <p className="card-text">
                <span className="font-weight-bold">Last Name: </span>
                {lastName}
              </p>
              <p className="card-text">
                <span className="font-weight-bold">Gender: </span>
                {gender}
              </p>
              <p className="card-text">
                <span className="font-weight-bold">Height: </span>
                {height.toString() / 100}m
              </p>
              <p className="card-text">
                <span className="font-weight-bold">Birth: </span>
                {birth.toString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IdCard;
