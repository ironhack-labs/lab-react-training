import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const lastDigits = number.slice(-4);
    const style = {
        backgroundColor: bgColor,
        color: color,

    }
  return (
    <div className='Credit-card' style={style}>
        <h4>{type}</h4>
        <h2>.... .... .... {lastDigits}</h2>
        <p>Expire {expirationMonth}/{expirationYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCard