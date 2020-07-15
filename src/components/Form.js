import React, { Component } from 'react'

export default class Form extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nationality: ''
        }
    }
    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
        
    render() {
        return (
        <div className="form">
          <form >
            <div className="form-group">
              <label for="email">Email address</label>
              <input
                value={this.state.email}
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label for="nationality">Nationality</label>
              <select id="nationality" class="form-control"> 
                <option selected>Choose...</option>
                <option value="cat">Catalan</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
          <p>Hola</p>
          <p>Your email address is: {this.state.email}</p>
          </div>
        );
    }
}
