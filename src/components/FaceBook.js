import React, { Component } from "react";
import profiles from '../data/berlin.json';

class FaceBook extends Component {

  studentOrTeacher = (isStudent) => {
    if (isStudent === true ) {
      return 'Student';
    } else {
      return 'Teacher';
    }
  }

  render () {
    return (
      <div>
        {profiles.map(item => (
          <div className="fb-box">
            <img className="fb-img" src={item.img} alt=""/>
            <div>
              <p><b>First Name: {item.firstName} </b></p>
              <p><b>Last Name: {item.lastName}</b></p>
              <p><b>Country: {item.country}</b></p>
              <p><b>Type: {this.studentOrTeacher(item.isStudent)}</b></p>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default FaceBook;


