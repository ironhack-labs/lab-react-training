import React from "react";
/* import MasterCardLogo from "./src/assets/images/master-card.svg"; */

const CreditCard = ({ type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) => {

    const lastFourDigits = number.slice(-4);

    const creditCardStyle = {
        backgroundColor: bgColor,
        color: color,
        padding: '10px',
        borderRadius: '10px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        margin: '10px',
        fontSize: '18px',
      };

      const cardLogo = {
        width: '80px',
        marginBottom: '10px',
      };

      return (
        <div style={creditCardStyle}>
        {type === 'Visa' ? (
        <img
          style={cardLogo}
          src="../assets/images/visa.png"
          alt="Visa"
        />
      ) : (
        <img
          style={cardLogo}
          /*unsure how to link SVG here.*/
          src=""
          alt="Master Card"
        />
      )}
      <div style={{ marginBottom: '10px' }}>{lastFourDigits}</div>
      <div style={{ marginBottom: '10px' }}>
        Expires {expirationMonth}/{expirationYear % 100}
      </div>
      <div style={{ marginBottom: '10px' }}>{bank}</div>
      <div>{owner}</div>
    </div>
)}

export default CreditCard