import React from "react";

let CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
        let expMonth = new Date(expirationMonth).toDateString();
        let expYear = new Date(expirationYear).toDateString();
        let cardNumber = number.slice(-4)
    
        return(
            <div style={{backgroundColor: bgColor, color:color, width:350, height:200}}>
            <p>{type}</p>
            <p>**** **** **** {cardNumber}</p>
            <p>Expires: {expMonth}/{expYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
            </div>
        )
}

export default CreditCard