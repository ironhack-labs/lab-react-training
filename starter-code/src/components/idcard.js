import React, { Component } from 'react';
import "./idcard.css";

class IdCard extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="IdCard">
        <div>
        <img src= {this.props.picture}></img>
        </div>
        <div className="idCardTextContainer">
        <p><strong>FirstName:</strong> {this.props.firstName}</p>
        <p><strong>LastName:</strong> {this.props.lastName}</p>
        <p><strong>Gender:</strong> {this.props.gender}</p>
        <p><strong>Heigth:</strong> {this.props.height}</p>
        <p><strong>Birth:</strong> {this.props.birth}</p>
        </div>
      </div>
    );
  }
}

export default IdCard;
