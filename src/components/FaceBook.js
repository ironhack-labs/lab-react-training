import React, { Component } from "react";
import profiles from '../data/berlin.json';

class FaceBook extends Component {

  state = {
    blue: true,
  }

  studentOrTeacher = (isStudent) => {
    if (isStudent === true ) {
      return 'Student';
    } else {
      return 'Teacher';
    }
  }

  createBtns = () => {
    let btnArray = [];
      profiles.map(item => {
        return btnArray.push(item.country);
      })
    let sortedArr = btnArray.slice().sort();
    let cleanArray = sortedArr.filter((a, b) => sortedArr.indexOf(a) === b);
    return cleanArray.map(item => <button className="country-btn">{item}</button>)
  }

  changeColor = () => {
    this.setState({blue: !this.state.blue});
 }

  render () {
    let btnClass = this.state.blue ? "fb-box" : "fb-blue-box";
    return (
      <div>
      <button onClick={this.changeColor} className="country-btn">All</button>
      {this.createBtns()}
 
        {profiles.map(item => (
          <div className={btnClass}>
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


