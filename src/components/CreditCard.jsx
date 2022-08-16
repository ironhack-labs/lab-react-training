import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
  return (
    <div className="CreditCard">
      <p>
        <b>Type:</b> {type}
      </p>
      <p>
        <b>Number:</b> {number}
      </p>
      <p>
        <b>ExpirationMonth:</b> {expirationMonth}
      </p>
      <p>
        <b>ExpirationYear:</b> {expirationYear}
      </p>
      <p>
        <b>Bank:</b> {bank}
      </p>
      <p>
        <b>Owner:</b> {owner}
      </p>
      <p>
        <b>BgColor:</b> {bgColor}
      </p>
      <p>
        <b>Color:</b> {color}
      </p>
      <br />
    </div>

    
  );

  
}

export default CreditCard;