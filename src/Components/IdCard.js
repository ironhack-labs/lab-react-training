import React, { Component } from 'react';
import './Components.css';

export class IdCard extends Component {
  render() {
    return (
      <div
        style={{
          border: '1px solid black',
          width: '500px',
          height: '200px',
          display: 'flex',
        }}
      >
        <div>
          <img
            src={this.props.picture}
            alt={`${this.props.lastName} ${this.props.firstName}`}
            style={{ width: '180px', height: '180px' }}
          />
        </div>

        <div>
          <p>
            <span className="bold-key">First name:</span> {this.props.firstName}
          </p>
          <p>
            <span className="bold-key">Last name:</span> {this.props.lastName}
          </p>
          <p>
            <span className="bold-key">Gender:</span> {this.props.gender}
          </p>
          <p>
            <span className="bold-key">height:</span> {this.props.height}
          </p>
          <p>
            <span className="bold-key">birth:</span> {this.props.birth}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
