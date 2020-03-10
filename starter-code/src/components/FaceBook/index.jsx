import React, { Component } from 'react';

class FaceBook extends Component {
  render() {
    const {firstName, lastName, country, img, isStudent} = this.props;

    return (
      <div className="idCard">
        <div>        
          <img src={img} alt="profilePic"></img>
        </div>
        <div>
          <p><strong>First Name: </strong>{firstName}</p>  
          <p><strong>Last Name: </strong>{lastName}</p>
          <p><strong>Country: </strong>{country}</p>
          {
          (isStudent && <p><strong>Type: </strong>Student</p>) ||
          <p><strong>Type: </strong>Teacher</p>
          }
        </div>
      </div>
    );
  }
}

export default FaceBook;