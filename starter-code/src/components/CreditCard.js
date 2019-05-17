import React from 'react';

import './CreditCard.css';

const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color
  }

  return (
    <div className="creditcard-card" style={divStyle}>
      <img src={getImage(props.type)} alt="bank logo" />
      <p className="creditcard-number">•••• •••• •••• {props.number.substr(12, 4)}</p>
      <p className="creditcard-details">
        Expired {props.expirationMonth}/{props.expirationYear}&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}
        <br /> {props.owner}
      </p>
    </div>
  )
}

const getImage = (type) => {
  switch (type) {
    case 'Visa':
      return './img/visa.png'
    case 'Master Card':
      return './img/master-card.svg'
    default:
      return ''
  }
}

export default CreditCard;