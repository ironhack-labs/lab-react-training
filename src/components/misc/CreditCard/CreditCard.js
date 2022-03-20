import React from 'react';

const CreditCard = (props) => {
    return (
        <div style={{backgroundColor: props.bgColor, color: `${props.color}`}}>
            <h4>{props.type}</h4>
            <h4>{props.number}</h4>
            <h4>{props.expirationMonth}</h4>
            <h4>{props.expirationYear}</h4>
            <h4>{props.bank}</h4>
            <h4>{props.owner}</h4>
            <h4>{props.color}</h4>
        </div>
    );
};

export default CreditCard;