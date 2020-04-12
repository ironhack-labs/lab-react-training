import React, { Component } from "react";
import "./IdCard.css";

export default class IdCard extends Component {
  // static propTypes = {};

  render() {
    const { picture, firstName, lastName, gender, height, birth } = this.props;
    return (
      <div className="card-container">
        <img className="card-img" src={picture} alt="photo card id" />
        <div>
          <p>
            <b>First Name: </b>
            {firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {lastName}
          </p>
          <p>
            <b>Gender: </b>
            {gender}
          </p>
          <p>
            <b>Height: </b>
            {height}
          </p>
          <p>
            <b>Birth: </b>
            {birth.toDateString()}
          </p>
        </div>
      </div>
    );
  }
}
