import React, { Component } from 'react';
import { AddForm } from "./AddForm";


class AddStudent extends Component {

  constructor(props){
      super(props);
      this.state = { 
        firstName: '',
        lastName: '',
        country: '',
        isStudent: ''
      }
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheStudent(this.state);   
    console.log("this.state", this.state)
    this.setState({
        firstName: '',
        lastName: '',
        country: '',
        isStudent: false
    })  
  }

  handleFirstNameInput = (event) => {
    this.setState({
      firstName: event.target.value
    })
    console.log("this.state", this.state)
  }
  handleLastNameInput = (event) => {
    this.setState({
      lastName: event.target.value
    })
    console.log("this.state", this.state)
  }

  handleCountryInput = (event) => {
    this.setState({
      country: event.target.value
    })
    console.log("this.state", this.state)
  }

  handleIsStudentCheck = (event) => {
    this.setState({
      isStudent: event.target.type === 'checkbox' ? true : false
    })
    console.log("this.state", this.state)
  }

  
  render(){

    return   (
        <AddForm  {...this.state}
        handleFormSubmit={e=> this.handleFormSubmit(e)}
         handleFirstNameInput={e=> this.handleFirstNameInput(e)} 
        handleLastNameInput={e=> this.handleLastNameInput(e)}
        handleCountryInput={e=> this.handleCountryInput(e)}
        handleIsStudentCheck={e=> this.handleIsStudentCheck(e)}/>
    )

  }
}

export default AddStudent;