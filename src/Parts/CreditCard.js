import React from 'react'

export default function CreditCard(props) {

  let type
  if(props.type === 'Visa'){
    type = 'img/visa.png'
  }else {
    type = 'img/master-card.svg'
  }

  let hideCard = `•••• •••• •••• ${props.number.slice(-4)}`

  return (
    <div className="card" style={{backgroundColor: `${props.bgColor}`, width:'20rem'}}>
      <img src={type}alt="oops" style={{width: '80px'}}/>
      <p>{hideCard}</p>
      <div>
        <div>
          <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
    </div>
  )
}
