import React from 'react'
import './CreditCard.css'

// import logoVIsa from '../img/visa.png'
// import logoMasterCard from '../img/master-card.svg'

function hideNumbers(number) {
  return number.slice(-4)
}

function expiresDate(year) {
  console.log(year);
  return year.toString().slice(-2)
}


const CreditCard = (props) => {
  const types = {
    Visa: "../img/visa.png",
    "Master Card": "../img/master-card.svg"
}
    return (
        <div className="CreditCard" style={{backgroundColor: props.bgColor, color: props.color }}>
              <div className="type">
              <img src={types[props.type]} alt=""/>
              </div>
              <div className="number">•••• •••• •••• {hideNumbers(props.number)}</div>
              <div>
              Expires {props.expirationMonth}/{expiresDate(props.expirationYear)}
              <span className="bank">{props.bank}</span>
              </div>
              <div>
                {props.owner}
              </div>
        </div>
 )
}

export default CreditCard