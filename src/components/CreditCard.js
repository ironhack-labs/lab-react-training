import React from "react";

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
        padding: '10px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '230px',
        width: '350px',
      };
      const logoStyle = {
        alignSelf: 'flex-end',
        width: '60px',
      }

    return (
        <div style={cardStyle}>
            <img src={type === 'Visa' ? '/visa.png' : '/master-card.svg'} alt={type} style={logoStyle}/>
            <p>{type} {number}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    );
};

export default CreditCard;