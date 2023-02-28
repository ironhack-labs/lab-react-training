import React from 'react'

function CreditCard(props) {
  return (
     <div>
    <p>{props.type}</p>
    <p>{props.number}</p>
    <p>{props.expirationMonth}</p>
    <p>{props.expirationYear}</p>
    <p>{props.bank}</p>
    <p>{props.owner}</p>
    <p>{props.bgColor}</p>
    <p>{props.color}</p>
</div>
  )
}

export default CreditCard