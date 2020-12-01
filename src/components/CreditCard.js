import React from 'react'

export default function CreditCard(props) {
    return (
        <div className="creditCard creditCardmargin" style= { { backgroundColor: props.bgColor, color: props.color} }>
            <p class="creditCardLogo"> <img src={props.type} alt="credit card logo"/> </p>
            <p class="creditCardNumber creditCardmargin">{props.number}</p>
            <p class="creditCardExpire creditCardmargin"> 
                <b>Expires</b> {props.expirationMonth} /{props.expirationYear} <b>{props.bank} </b>
                <br></br>
                {props.owner} </p>
            {/* <p> {props.bgColor} </p>
            <p> {props.color} </p> */}
        </div>
    )
}
