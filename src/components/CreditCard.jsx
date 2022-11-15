import React from 'react';

function CreditCard(props) {
    return (
        
        <div className="credit" >
            <p className="type"> {props.type} </p>
            <p className="number">{props.number}</p>
            <span className="expirationMonth"> {props.expirationMonth} </span>
            <span className="expirationYear">{props.expirationYear}</span>
            <span className="bank"> {props.bank} </span>
            <p className="owner"> {props.owner} </p>
            {/* <p className="bgColor">{props.bgColor}</p>
            <p className="color"> {props.color} </p> */}
        </div>
    )

};

export default CreditCard