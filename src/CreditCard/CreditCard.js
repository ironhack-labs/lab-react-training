import React from 'react'

const CreditCard = (props) => {
    const creditCardStyle = {backgroundColor:`${props.bgColor}`, color:`${props.color}` ,height:"250px", width:"300px"}
    const cardNumber = props.number.slice(-4)
    console.log(cardNumber)
    return (
        <div style={creditCardStyle}>
           <p>{props.type}</p>  
           <p>**** **** **** {cardNumber}</p>
           <p>{props.expirationMonth}</p>
           <p>{props.expirationYear}</p>
           <p>{props.bank}</p>
           <p>{props.owner}</p>
        </div>
    )
}

export default CreditCard
