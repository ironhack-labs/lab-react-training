import React, { Component } from "react";

class IdCard extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <img src={props.picture} alt="profile" />
        <h3>First Name: {props.firstName}</h3>
        <h3>Last Name: {props.lastName}</h3>
        {props.gender && <h3>Gender: {props.gender}</h3>}
        {props.height && <h3>Height: {props.height}</h3>}
        {props.birth && <h3>Birth: {props.birth}</h3>}
        {props.country && <h3>Country: {props.country}</h3>}
        {props.type && <h3>Type: {props.type}</h3>}
      </div>
    );
  }
}

export default IdCard;
