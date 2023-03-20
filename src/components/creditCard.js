import React from 'react'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  const divStyle = {
    backgroundColor: color
  }
  let logoBank = '';
  if (type === 'Visa') { logoBank = 'images/logo-visa.jpg' }
  if (type === 'Master Card') { logoBank = 'images/logo-mastercard.jpg' };

  const lastFour = number.slice(-4)

  return (
    <div className="cards">
      <div className='creditCard' style={divStyle}>
        <img src={logoBank} className='logoCard' />
        <div className='number'>
          <span className='creditCardNumber'>
            •••• •••• •••• {lastFour}
          </span>
        </div>
        <div className='creditCardData'> Expires: {expirationMonth} {expirationYear}

          <p className='bank'>{bank}</p>
          <p className='owner'>{owner}</p>
        </div>
      </div>


    </div>

  )
}

export default CreditCard