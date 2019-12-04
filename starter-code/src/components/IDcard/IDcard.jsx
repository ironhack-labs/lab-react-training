import React, { Component } from 'react'
import "./IDcard.css"

class IDCard extends Component {
  render() {
    return (
      <div className="IDcard">
      <img src={this.props.picture} alt=""/>
      <div className="info">
      <p>First Name: {this.props.firstName}</p> 
      <p>Last Name: {this.props.lastName}</p> 
      <p>Gender: {this.props.gender}</p> 
      <p>Height: {this.props.height/100}m</p>
      <p>Birth: {this.props.birth.toString()}</p>
      </div>

      </div>
    )
  }
}
export default IDCard;






