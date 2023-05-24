import React from "react";

function CreditCard({ type, number, expirationMonth, bank, owner, bgColor, color }) {
  return (
    <div style={{ backgroundColor: bgColor, color: color }} className="credit-card">
      <div className="card-type">{type}</div>
      <div className="card-number">{number}</div>
      <div className="card-expiration">{expirationMonth}</div>
      <div className="card-bank">{bank}</div>
      <div className="card-owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
