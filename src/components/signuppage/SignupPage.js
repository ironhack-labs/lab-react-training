import React, { Component } from 'react'

export default class SignupPage extends Component {

    state = {
        email: '',
        password: '',
        nationality: ['en', 'de', 'fr']
    }

    changeHandler = (e) => {
        let { name, value } = e.target
      
        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                
                <form onSubmit={(e) => this.submitHandler(e)}>
                    <div className='form-group'>
                        <label htmlFor="email">Email</label>
                        <input 
                            className='form-control'
                            type="email" 
                            name="email" 
                            id="email" 
                            aria-describedby="emailHelp" 
                            placeholder="Enter email"
                            value={this.state.email} 
                            onChange={this.changeHandler}/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor="password">Password</label>
                        <input 
                            className='form-control'
                            type="password" 
                            name="password" 
                            id="password"
                            placeholder="Password"
                            value={this.state.password} 
                            onChange={this.changeHandler}/>
                    </div>
                        
                    <div className='form-group'>
        
                        <label htmlFor="nationality">Nationality</label>
                        <select 
                            className="form-control"
                            name="nationality" 
                            id="nationality" 
                            onChange={this.changeHandlerM} >
                                <option value="en">{this.state.nationality[0]}</option>
                                <option value="de">{this.state.nationality[1]}</option>
                                <option value="fr">{this.state.nationality[2]}</option>
                        </select>
                    </div>
    
                    <button type="submit" class="btn btn-primary" >Sign up</button>

                </form>
                <hr></hr>
                <p></p>
                <p>Your email is {this.state.email}</p>

            </div>
        )
    }
}
