import React, { Component } from "react";
import profiles from '../data/berlin.json';

class FaceBook extends Component {

  state = {
    all: true,
    selected: true,
  }

  studentOrTeacher = (isStudent) => {
    if (isStudent === true ) {
      return 'Student';
    } else {
      return 'Teacher';
    }
  }

  // createBtns = () => {
  //   let btnArray = [];
  //     profiles.map(item => {
  //       return btnArray.push(item.country);
  //     })
  //   let sortedArr = btnArray.slice().sort();
  //   let cleanArray = sortedArr.filter((a, b) => sortedArr.indexOf(a) === b);
  //   return cleanArray.map(item => <button onClick={this.changeColorSelected} className="country-btn">{item}</button>)
  // }

  createBtns = () => {
    let btnBackColor = this.state.selected ? "country-btn" : "country-blue-btn";
    let btnArray = [];
      profiles.map(item => {
        return btnArray.push(item.country);
      })
    let sortedArr = btnArray.slice().sort();
    let cleanArray = sortedArr.filter((a, b) => sortedArr.indexOf(a) === b);
    return cleanArray.map((item, index) => <button key={index} onClick={this.changeColorSelected} className={btnBackColor}>{item}</button>)
  }

  changeColorAll = () => {
    this.setState({all: !this.state.all});
  }

  changeColorSelected = () => {
    this.setState({selected: !this.state.selected});
  }

  render () {
    let btnClass = this.state.all ? "fb-box" : "fb-blue-box";
    let btnBackColor = this.state.all ? "country-btn" : "country-blue-btn";
    return (
      <div>
      <button onClick={this.changeColorAll} className={btnBackColor}>All</button>
      {this.createBtns()}
 
        {profiles.map((item, index) => (
          <div key={index} className={btnClass}>
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


