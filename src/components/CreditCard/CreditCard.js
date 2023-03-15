import React from 'react'
import visa from '../../assets/images/visa.png'


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

  const divStyles = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    width: 400,
    height: 200,
    borderRadius: 10,
    margin: 10,
    paddingTop: 15,
    paddingRight: 15,
  }

  const numberSize = { fontSize: 35 }
  const typeCardSize = { width: 50 }

  let typeCard
  if (type === 'Visa') {
    typeCard = visa
  } else {
    typeCard = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png'
  }

  const endNums = number.split('').splice(12)
 

  return (
    <div style={divStyles} className='d-flex flex-column align-self-center'>
      <div className='d-flex flex-column align-items-end'>
        <img src={typeCard} alt="typeCard" style={typeCardSize} />
        <div style={numberSize}>
          <span className='mx-2'>····</span>
          <span className='mx-2'>····</span>
          <span className='mx-2'>····</span>
          <span>{endNums}</span>
        </div>
      </div>
      <div className='d-flex flex-column align-items-start mx-3'>
        <div className='d-flex flex-row'>
          <p>Expires {expirationMonth}/{expirationYear}</p>
          <p className='mx-4'>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  )
}

export default CreditCard