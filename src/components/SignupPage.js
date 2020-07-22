import React, { Component } from 'react'

export default class SignupPage extends Component {
    constructor (props) {
        super (props)
        this.state = {
            email: "",
            password : "",
            redirect: false
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    
    handleSubmit = (event) => {
        event.target.checkValidity()
        event.preventDefault()  
        this.setState(
            {
                email: "",
                password:""
            })
          if (event.target.checkValidity()) {
            this.setState({
                redirect: true
              })
          }
              
    }


    render() {
        return (
            <div >
                 <form onSubmit={this.handleSubmit}>
                  <label ><b> Email:</b></label>
                  <input  conChange={this.handleChange} type="email" name="email" value={this.state.email} />

                  <label><b>Password:</b> </label>
                  <input onChange={this.handleChange}  type="text" name="password" value={this.state.password} />
                  <label>Nacionality: </label>
                  <select value="nationality">
                    <option value="en">English</option>
                    <option value="de">Deustch</option>
                    <option value="fr">French</option>
                    </select>
         
                  <button variant="primary" type="submit" value="Sign up">Sign up </button> 
                     
            </form>
            </div>
        )}}
