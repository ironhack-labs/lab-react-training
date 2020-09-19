import React from 'react'
import './CreditCard.css';

function getNumberCard(number) {
  return '···· ···· ···· ' + number.substr(-4, number.length)
}

function getYear(number) {
  return number.toString().substr(2, number.length)
}

function getImage(val) {
  if (val === 'Visa') {
    return '/img/visa.png'
  }
  return '/img/master-card.svg'
}

function getMonth(number) {
  return number < 9 && number > 0 ? '0'+ number : number
}

function CreditCard(props) {
  return (
    <div className="credit-card" style={{ color:`${props.color}`,  backgroundColor: `${props.bgColor}` }}>
      <img src={getImage(props.type)} alt={props.type} />
      <h5>{getNumberCard(props.number)}</h5>
      <p>
        {getMonth(props.expirationMonth)}/{getYear(props.expirationYear)}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.bank}
      </p>
      <p>
        {props.owner}
      </p>
    </div>
  )
}

export default CreditCard