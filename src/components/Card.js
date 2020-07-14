import React, { Component } from 'react'

export default class Card extends Component {
    render() {
        return (
          <div className="card border-dark">
            <div className="card-horizontal">
                <img src={this.props.pic} alt="Person's face" />
              <div className="card-body">
                  <ul className="card-text">
                      <li><b>First name</b>: {this.props.firstName}</li>
                      <li><b>Last name</b>: {this.props.lastName}</li>
                      <li><b>Gender</b>: {this.props.gender}</li>
                      <li><b>Height</b>: {this.props.height}</li>
                      <li><b>Birth date</b>: {this.props.birthdate}</li>
                  </ul>
              </div>
            </div>
          </div>
        );
    }
}
