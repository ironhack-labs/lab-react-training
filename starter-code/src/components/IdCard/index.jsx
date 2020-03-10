import React, { Component } from 'react';

class IdCard extends Component {
    
  render() {
    const {firstName, lastName, gender, height, birth, pic} = this.props;
    const dateBirth = birth.toLocaleString().split(",");  
    return (
      <div className="idCard">
        <div>        
          <img src={pic} alt="sea"></img>
        </div>
        <div>
          <p>First Name: {firstName}</p>  
          <p>Last Name: {lastName}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height} cm</p>
          <p>Date of birth: {dateBirth[0]}</p>
        </div>
      </div>
    );
  }
}

export default IdCard;