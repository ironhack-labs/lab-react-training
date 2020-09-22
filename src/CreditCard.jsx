import React from 'react';

const CreditCard = props => {
    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
        width: 300,
        height: 170,
        borderRadius: 11,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
    }

    return (
        <div style={cardStyle}>
            <span>{props.type}</span>
            <span>{props.number}</span>
            <span>{props.expirationMonth}</span>
            <span>{props.expirationYear}</span>
            <span>{props.bank}</span>
            <span>{props.owner}</span>
        </div>
    ) 
}

export default CreditCard;