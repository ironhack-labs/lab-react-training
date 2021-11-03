import React from 'react';

export class CreditCard extends React.Component {
  render() {
    return (
      <section className="CreditCard">
        <p>{this.props.type}</p>
        <p>{this.props.number}</p>
        <p>{this.props.expirationMonth}</p>
        <p>{this.props.expirationYear}</p>
        <p>{this.props.bank}</p>
        <p>{this.props.owner}</p>
        <p>{this.props.bgColor}</p>
        <p>{this.props.color}</p>
      </section>
    );
  }
}

