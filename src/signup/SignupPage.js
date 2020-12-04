import React, { Component } from 'react'

export default class SignupPage extends Component {

    state={
        email:'',
        password:'',
        nationality:'',
        salutation:'',
        firstMessage:'',
        secondMessage:''
    }

    handleSubmit=event=>{
        event.preventDefault();

        let salutation='';
        if(this.state.nationality==="de")
            salutation="Hallo"
        else if(this.state.nationality==="fr")
            salutation="Bonjour"
        else
            salutation="Hello"
        this.setState({
            salutation:salutation,
            firstMessage:'Your email address is: '+this.state.email,
            secondMessage:''
        })

    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
          [name]: value
        })
        
      }


    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>

            <label htmlFor="email">Email</label><br/>
            <input 
            type="email" 
            name="email" 
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
            /><br/><br/>

            <label htmlFor="password">Password</label><br/>
            <input 
            type="password"
            name="password" 
            id="password"
            value={this.state.password}
            onChange={this.handleChange} 
            /><br/><br/>

            <label htmlFor="nationality">Nationality</label><br/>
            <select
            type="text"
            name="nationality"
            id="nationality"
            value={this.state.nationality}
            onChange={this.handleChange}>
                <option value="en">English</option>
                <option value="de">German</option>
                <option value="fr">French</option>
            </select>
            <br/><br/>

            <button type='submit'>Sign up</button>

            </form> <br/><br/>

            <p>{this.state.salutation}</p>
            <p>{this.state.firstMessage}</p>
            <p>{this.state.secondMessage}</p>

            </div>
        )
    }
}
