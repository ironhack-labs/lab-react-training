import React, { Component } from "react";
import './idcard.css';

class IdCard extends Component {
  
  maleOrFemale = (string) => {
    if (string === 'male' || string === 'female') {
      return string;
    } else {
      return 'not defined';
    }
  }
  
  render () {
    const { picture, firstName, lastName, gender, height, birth } = this.props;
    return (
      <div className="idcard-box">
        <img className="idcard-img" src={picture} alt=""/>
        <div>
          <p><b>First Name: </b>{firstName}</p>
          <p><b>Last Name: </b>{lastName}</p>
          <p><b>Gender: </b>{this.maleOrFemale(gender)}</p>
          <p><b>Height: </b>{height}</p>
          <p><b>Birth: </b>{birth.toDateString()}</p>
        </div>
      </div>
    )
  }
}

export default IdCard;