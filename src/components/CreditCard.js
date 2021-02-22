import React from 'react'



export default function CreditCard(props) {
   
    return ( <div style={{ border: '1px solid black', backgroundColor: `${props.bgColor}`, color: `${props.color}` }}>
   
    <p>{props.type}</p>
    <p>{props.number}</p>
    <p>Expires {props.expirationMonth} {props.expirationYear} {props.bank}</p>
       <p>{props.owner}</p>
    </div>
    )
}

