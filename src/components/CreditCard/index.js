import React from 'react'

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  return (
    <div className="card" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <img src={type} alt="" />
      <p>{number}</p>
      <p>{expirationMonth}</p>
      <p>{expirationYear}</p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  )
}

export default CreditCard
