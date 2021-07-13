import React from 'react'

export default function CreditCard(props) {
  return (
    <>
        <div className='card' style={{height: '200px', width: '350px', backgroundColor: props.bgColor}}>
            <p>{props.type}</p>
            <p>{props.number}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p>
            <p>{props.owner}</p>
        </div>
    </>
  )
}
