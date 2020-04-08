import React, { Component } from 'react';
const moment = require ('moment')

export default class IdCard extends Component {
  render(){
    return(
      <div className="card">
        <img src={this.props.picture} alt="Persona"/>
        <div>
          <p><strong>First name:</strong> {this.props.firstName}</p>
          <p><strong>Last name:</strong> {this.props.lastName}</p>
          <p><strong>Gender:</strong> {this.props.gender}</p>
          <p><strong>Height:</strong> {this.props.height}</p>
          <p><strong>Birth:</strong> {moment(this.props.birth).format('ll')}</p>
        </div>
      </div>
    );
  }
}
