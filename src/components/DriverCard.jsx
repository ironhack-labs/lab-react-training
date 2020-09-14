import React, { Component } from 'react';

class DriverCard extends Component {
  render() {
    return (
      <div className="DriverCard box">
        <img src={this.props.picture} style={{height: 150}}/>
        <div className="right">
          <strong>Name</strong>: {this.props.name} <br/>
          <strong>Rating</strong>: {this.props.rating} <br/>
          <strong>Modelo</strong>: {this.props.modelo} <br/>
          <strong>Licencia</strong>: {this.props.licencia} <br/>
        </div>
      </div>
    );
  }
}

export default DriverCard;