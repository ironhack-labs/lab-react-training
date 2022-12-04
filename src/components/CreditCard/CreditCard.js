import React from 'react'
import './CreditCard.css'

const CreditCard = (props) => {
    const { 
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
        } = props;
  return (
    <div>
      CreditCard
        <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }} className="CreditCard" >
          <h3>{type}</h3>
          <h3>{number}</h3>
          <h3>Expires: {expirationMonth}</h3>
          <h3>{expirationYear}</h3>
          <h3>{bank}</h3>
          <h3>{owner}</h3>
        </div>
    </div>
  )
}

export default CreditCard;