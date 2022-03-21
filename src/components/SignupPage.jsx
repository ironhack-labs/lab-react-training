import React, { Component } from 'react'

export default class SignupPage extends Component {

    // state {
    //     email : 
    // }
  render() {
    return (
      <div>
            <p>Email</p>
            <input type="email"  />
            <p>Password</p>
            <input type="password"  />
            <p>Nationality</p>
            <input type="select"  />
      </div>
    )
  }
}
