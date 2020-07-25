import React, { Component } from 'react';

export default class IdCard extends Component {
  render() {
    return (
      <div className="idCard">
        <div className="img">
          <img src={this.props.picture} alt="card" />
        </div>
        <div className="textoCard">
          <p>
            <b>First name:</b> <span>{this.props.firstName}</span>
          </p>
          <p>
            <b> Last name:</b> <span>{this.props.lastName}</span>
          </p>
          <p>
            <b>Gender:</b> <span>{this.props.gender}</span>
          </p>
          <p>
            <b>Height: </b> <span>{this.props.height}</span>
          </p>

          <p>
            <b>Birth:</b> <span>{this.props.birth}</span>
          </p>
        </div>
      </div>
    );
  }
}
