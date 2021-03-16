import React from 'react';
import "./../styles/CreditCard.css";


const CreditCard = (props) => {
    console.log(props)

    let divStyle = {
        backgroundColor : `${props.bgColor}`,
        color : `${props.color}`
    }

    return (
        <div style={divStyle} className="creditcard">
        <p>{props.type}</p>
        <p>{props.number}</p>

        <div className="bankInfos">
        <p> Expires {props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
        </div>
        
        <p> {props.owner}</p>
            


        </div>
    )
}

export default CreditCard
