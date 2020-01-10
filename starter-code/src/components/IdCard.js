import React from "react";
import "./idCard.css"; 

class idCard extends React.Component{
  render(){
    return (
      <div className="idCard">
        <img src={this.props.picture}></img> 
        <b>First name:</b> <b>{this.props.firstName}</b><br></br>
        <b>Last name:</b> <b>{this.props.lastName}</b><br></br>
        <b>Gender:</b> <b>{this.props.gender}</b><br></br>
        <b>Height:</b> <b>{this.props.height}</b><br></br>
        <b>Birth:</b> <b>{this.props.birth}</b><br></br>
      </div>
    );
  }
}

export default idCard;