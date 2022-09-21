import React from "react"
import './Creditcard.css'

import visa from "../../assets/images/visa.png"
import mastercard from "../../assets/images/master-card.svg"


const Creditcard = (props) => {

let completeNumber = props.number

    function getSecretNumber (completeNumber) {
        let secretNumber = props.number.slice(-4)
        return ( `**** **** **** ${secretNumber}`)
    }

let backgroundRgb = { backgroundColor: props.bgColor}
let textColor = {color: props.color}




    return (

    <div className="tarjeta" style={backgroundRgb}>
        <div className="creditCardImg">
                {props.type === "Visa" ? <img src={visa} /> : null}
                {props.type === "Master Card" ? <img src={mastercard} /> : null}
            </div>
        <div className="secretNumber" style={textColor} >{getSecretNumber()}</div>
        <div className="alignLeft">
            <div> Expires {props.expirationMonth} / {props.expirationYear} </div>
            <div className="creditCardText" style={textColor}>{props.owner}</div>
            <div className="bank">{props.bank}</div>
        </div>
    </div>
        

    )

}

export default Creditcard