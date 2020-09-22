import React from 'react'
//import visaLogo from '/img/visa.png'
export default function CreditCard(props) {
   
    return (
        <div>
          <div style={{backgroundColor: props.bgColor}}>
          <img scr={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'} alt="card logo"/>
          <p>**** **** ****{props.number.slice(-4)}</p>
          <p>{Number(props.expirationMonth) < 9 ? '0'+ Number(props.expirationMonth) : Number(props.expirationMonth)}/{props.expirationYear.toString().slice(-2)}</p>
          <p>{props.bank}</p>
          <p>{props.owner}</p>
          </div>
        </div>
    )
}
