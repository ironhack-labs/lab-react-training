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

    internationalHello = () => {

      if (this.state.nationality === 'cat') {
        return 'Hola!';
      } else if (this.state.nationality === 'it') {
        return 'Ciao!';
      } else if (this.state.nationality === 'de') {
        return 'Hallo!';
      }
    }
        
    render() {
        return (
        <div className="form">
          <form >
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                name="email"
                value={this.state.email}
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                value={this.state.password}
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={e => this.handleChange(e)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <select name="nationality" value={this.state.nationality} onChange={e => this.handleChange(e)} className="form-control"> 
                <option defaultValue>Choose...</option>
                <option value="cat">Catalan</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Sign up</button>
          </form>
          <p>{this.internationalHello()} Your email address is <b>{this.state.email}</b></p>
          </div>
        );
    }
}
