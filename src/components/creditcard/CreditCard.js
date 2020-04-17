import React from 'react';

const CreditCard = (props) => {
    let {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    const divStyle = {
        backgroundColor: bgColor, 
        color: color
    };
    type = type.replace(" ", "-").toLowerCase();
    const img = type === "visa" ? `/img/${type}.png`: `/img/${type}.svg`;
    if (expirationMonth.toString().length < 2)  {expirationMonth = `0${expirationMonth.toString()}`};
    expirationYear = expirationYear.toString().substring(2);
    number = number.replace(/\d{12}(\d{4})/, "************$1");
    return (
        <div className="CreditCard" style={divStyle}>
            <div className="type"><img src={img} alt={type}/></div>
            <div className="number">{number}</div>
            <div className="expires-bank">
                <span>Expires {expirationMonth}/{expirationYear} </span>
                <span className="bank">{bank}</span>
            </div>
            <div className="owner">{owner}</div>
        </div>
    );
};
    
export default CreditCard;