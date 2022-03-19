import React, { Component } from 'react';
import './IdCard.css'


class IdCard extends Component {
  state = {
    // items: [],
    loading: false,
  };

  render() {
    return (
      <div className="card" style={{width: "36rem"}}>
        <img src={this.props.picture} style={{width: "15rem", height: "15rem"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text"> <b>First Name:</b> {this.props.firstName}</p>
          <p className="card-text"><b>Last Name:</b> {this.props.lastName}</p>
          <p className="card-text"><b>Gender:</b>{this.props.gender}</p>
          <p className="card-text"><b>Height:</b> {this.props.height}</p>
          <p className="card-text"><b>Birth:</b> {this.props.birth}</p>

          <a href="/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}

export { IdCard };
