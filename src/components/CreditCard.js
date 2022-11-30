import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  return (
    <div className='creditCard' style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
        <div className='logo'>
            {type === 'Visa' ? <img src='https://www.freepnglogos.com/uploads/visa-card-logo-9.png' alt="visa" /> : <img src='https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png' alt="mastercard" />}
        </div>
        <div className='number'>
            <p>{number}</p>
        </div>

        <div className='info'>
            <p>Expires {expirationMonth}/{expirationYear}     {bank}</p>
            <p>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard