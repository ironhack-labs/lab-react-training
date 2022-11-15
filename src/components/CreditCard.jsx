import React from "react";
import visaImg from "../assets/images/visa.png"
import mcImg from "../assets/images/mastercard.png"

function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    function checkType(type){
        if(type === "Visa"){
            return visaImg;
        } else{
            return mcImg;
        }
    }
    return(

        <div className="creditCard" style={{backgroundColor: `${bgColor}`, color: color}}>
            <img className="typecard" src={checkType(type)} alt="credit" />
            <h2 className="number">•••• •••• •••• {number.slice(-4)}</h2>
            <div className="datesbank">
            <p className="expiration">Expires {expirationMonth} / {expirationYear}</p>
            <p className="bank">{bank}</p>
            </div>
            <p className="owner">{owner}</p>

        </div>
      
    )
}

export default CreditCard