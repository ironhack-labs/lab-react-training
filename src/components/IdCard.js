import React, { Component } from 'react';

class IdCard extends Component {
  render() {
    return (
      <div className="card">
        <div>
          <img src={this.props.picture}></img>
        </div>
        <div>
          <p>
            First Name :<span>{this.props.firstName}</span>
          </p>
          <p>
            last Name :<span>{this.props.lastName}</span>
          </p>
          <p>
            Gender :<span>{this.props.gender}</span>
          </p>
          <p>
            height :<span>{this.props.height}</span>
          </p>
          <p>
            Birth :<span>{this.props.birth}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
