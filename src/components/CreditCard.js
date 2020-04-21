import React, { Component } from 'react';

class CreditCard extends Component {
    render() {

    const { type, number, expirationMonth, expirationYear, bank,owner, bgColor, color } = this.props;

    const cardStyle = {color: `${color}`, backgroundColor:`${bgColor}`};


return (
    <div className="credit-card" style={cardStyle}>
      <div className="type">{type}</div>
      <p className="number">{number}</p>
      <p className="">Expires {expirationMonth}/{expirationYear} {bank}</p>
      <p className="">{owner}</p>
    </div>
    );
  }
}
export default CreditCard;
