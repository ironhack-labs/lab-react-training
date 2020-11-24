import React from 'react';

function CreditCard(props){
    const creditStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`,
    };

    return(
        <div style={creditStyle}>
        <span>{props.type}</span>
        <span>{props.number}</span>
        <span>{props.expirationMonth}</span>
        <span>{props.expirationYear}</span>
        <span>{props.bank}</span>
        <span>{props.owner}</span>
        </div>
    );
}
export default CreditCard