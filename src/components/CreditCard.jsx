import React from 'react'

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  return (
    <div>
      <hr />
      <span>{type}</span><br />
      <span>{number}</span><br />
      <span>{expirationMonth}</span><br />
      <span>{expirationYear}</span><br />
      <span>{bank}</span><br />
      <span>{owner}</span><br />
      <span>{bgColor}</span><br />
      <span>{color}</span><hr />
    </div>
  )
}

export default CreditCard