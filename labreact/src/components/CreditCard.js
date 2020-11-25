import React from 'react';

const CreditCard = (props) => {
    return (
        <div style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
        >
            <p>{props.type}</p>
            <p>{props.number}</p>

            <p>
                {props.expirationMonth}/{props.expirationYear} {props.bank}
            </p>
            <p>{props.owner}</p>
        </div>
    );
};

export default CreditCard;