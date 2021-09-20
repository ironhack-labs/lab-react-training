import React, { Component } from 'react';

export class Userspace extends Component {
  logoutHandler = () => {
    this.props.onLogoutClick();
  };
  render() {
    return (
      <div className="border-box">
        <h4>Hey there, {this.props.user}</h4>

        <button onClick={this.logoutHandler}>Logout!</button>
      </div>
    );
  }
}

export default Userspace;
