import React, { Component } from 'react';

export default class CreditCard extends Component {
  render() {
    const type = this.props.type;

    return (
      <div>
        <img
          src={type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'}
          alt=""
        />
        <h2>{this.props.number}</h2>
        <p>
          Expires {this.props.expirationMonth} / {this.props.expirationYear}{' '}
          <span>{this.props.bank}</span>
        </p>
        <p>{this.props.owner}</p>
        <p></p>
      </div>
    );
  }
}
