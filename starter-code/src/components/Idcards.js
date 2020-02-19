import React, { Component } from 'react';


class IdCard extends Component {
  render() {
    return (
      <div className="IdCard box">
        <img src={this.props.picture} alt=""/>
        <div className="right">
          <p>First name</p>: {this.props.firstName} 
            <br/>
          <p>Last name</p>: {this.props.lastName} 
            <br/>
          <p>Gender</p>: {this.props.gender}
          <br/>
          <p>Height</p>: {this.props.height / 100}m 
          <br/>
          <p>Birth</p>: {this.props.birth.toDateString()}
          <br/>
        </div>
      </div>
    );
  }
}

export default IdCard;