import React from 'react'

import visaLogo from '../assets/images/visa.png'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
  let cardLogo
  switch (type) {
    case "Visa":
      cardLogo = visaLogo
      break;
    case "Masterd Card":

      break;
    default:
      cardLogo = ''
  }

  const showCardLast4 = (number) => {
    return number
      .split('')
      .map((char, index) => index < number.length - 4 ? (index + 1) % 4 === 0 && index > 0 ? '\u2022 ' : '\u2022' : char)
  }

  const showYearLast2 = () => {
    return expirationYear.toString()
      .split('')
      .slice(-2)
  }

  const showMonthLast2 = () => {
    return `0${expirationMonth}`
      .split('')
      .slice(-2)
  }

  return (
    <div className='credit-card container d-flex flex-column justify-content-around' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
      <div className="row">
        <div className="col d-flex flex-row justify-content-end">
          <img src={cardLogo} alt="" srcSet="" />
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-row justify-content-center">
          {showCardLast4(number)}
        </div>
      </div>
      <div className="row">
        <div className="col d-flex flex-column align-items-start">
          <div>Expires {showMonthLast2()}/{showYearLast2()}<span className='ms-4'>{bank}</span></div>
          <div>{owner}</div>
        </div>
      </div>
    </div>
  )
}

CreditCard.defaultProps = {
  number: "",
  expirationMonth: "",
  expirationYear: ""
}

export default CreditCard