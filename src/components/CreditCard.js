import React from 'react'

export default function CreditCard(props) {
  return (
    <div style={{backgroundColor: `${props.bgColor}`, color:`${props.color}`}}  >
        <p>type: {props.type}</p>
        <p>cc #: {props.num}</p>
        <p>expy Month: {props.expyMonth}</p>
        <p>expy Year: {props.expyYear}</p>
        <p>bank: {props.bank}</p>
        <p>owner : {props.owner}</p>

    </div>
  )
}
