import React, { Component } from "react";

import './index.css'

export class IdCard extends Component {


  render() {
    
    return (
      <div className='card'>
        <div><img src={this.props.picture} alt="picture"/></div>
        <div>
          <div><b>First name: </b>{this.props.firstName} </div>
          <div> <b>Last name:</b> {this.props.lastName} </div>
          <div><b>Gender:</b> {this.props.gender} </div>
          <div><b>Height:</b> {this.props.height} </div>
          <div><b>Birth:</b> {this.props.birth.getDate()} /{this.props.birth.getMonth() + 1}/ {this.props.birth.getFullYear()}</div>
        </div>
      </div>
    );
  }
}

export default IdCard;
