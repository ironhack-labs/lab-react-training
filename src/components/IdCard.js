import React, { Component } from 'react';
import 'bulma/css/bulma.css';

export default class IdCard extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src={this.props.picture} alt="Placeholder" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-4">
                    {this.props.lastName} {this.props.firstName}
                  </p>
                  <p className="subtitle is-6">
                    <strong>Gender: </strong>
                    {this.props.gender}
                  </p>
                </div>
              </div>

              <div className="content">
                <strong>Height: </strong>
                {this.props.height}cm
                <br />
                <strong>Birth: </strong>
                {this.props.birth.toDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
