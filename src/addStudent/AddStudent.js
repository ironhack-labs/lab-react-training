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

  // Handle Submitted form
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.addTheStudent(this.state);   
    // after submit set state props to '' - nothing
    this.setState({
        firstName: '',
        lastName: '',
        country: '',
        isStudent: false
    })  
  }

  //1.--- This handler takes care of all input fields ------
  handleChange(event) {
      event.preventDefault()
    let { name, value } = event.target;
    if(name === "isStudent" && value === "on"){
        value = true;
    } 
    this.setState({[name]: value});
  }
 
  //2. -------- For each input handler ----------

//   handleFirstNameInput = (event) => {
//     this.setState({
//       firstName: event.target.value
//     })
//     console.log("this.state", this.state)
//   }
//   handleLastNameInput = (event) => {
//     this.setState({
//       lastName: event.target.value
//     })
//     console.log("this.state", this.state)
//   }

//   handleCountryInput = (event) => {
//     this.setState({
//       country: event.target.value
//     })
//     console.log("this.state", this.state)
//   }

//   handleIsStudentCheck = (event) => {
//     this.setState({
//       isStudent: event.target.type === 'checkbox' ? true : false
//     })
//     console.log("this.state", this.state)
//   }

  
  render(){

    return   (
        <AddForm  {...this.state}
        handleChange={e => this.handleChange(e)}
        handleFormSubmit={e=> this.handleFormSubmit(e)}
        //  handleFirstNameInput={e=> this.handleFirstNameInput(e)} 
        // handleLastNameInput={e=> this.handleLastNameInput(e)}
        // handleCountryInput={e=> this.handleCountryInput(e)}
        // handleIsStudentCheck={e=> this.handleIsStudentCheck(e)}
        />
    )

  }
}

export default AddStudent;