import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div>
        <h3>Mail</h3>

          <label for="email">Email</label>
          <br />
          <input type="text" id="email" name="email" required />
          <br />
          <label for="lname">Last name:</label>
          <br />
          <input type="text" id="lname" name="lname" required />
          <br />
          <br />
          <button> Submit</button>
      </div>
    );
  }
}

export default Signup;
