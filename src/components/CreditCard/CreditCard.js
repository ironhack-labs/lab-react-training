import React from "react";

const CreditCard = (props) => {

    const styleOfCard = {
        backgroundColor: `${props.bgColor}`,
        writingColor: `${props.color}`
    }

    return (

        <div className="CreditCard-container" style={styleOfCard}>

            <span className="card"> {props.type} </span>
            <span className="number"> {'**** **** ****' + props.number.slice(-4)} </span>
            <span className="expiration"> Express: {props.expirationMonth} / </span>
            <span className="expiration"> {props.expirationYear} </span>
            <span className="expiration"> {props.bank} </span>
            <span className="owner"> {props.owner} </span>

            </div>
    );
};

export default CreditCard;