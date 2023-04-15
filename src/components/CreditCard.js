import React from 'react';

const CreditCard = (props) => {
  const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '200px',
    width: '350px',
    margin: '20px',
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                      linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
    backgroundSize: '15px 15px',
    backgroundPosition: 'left top, left bottom, right top, right bottom'
  }

  const cardLogo = {
    marginBottom: '10px',
    height: '30px'
  }

  const cardNumber = {
    fontSize: '25px',
    marginBottom: '10px'
  }

  const cardExpiration = {
    fontSize: '15px'
  }

  return (
    <div style={cardStyle}>
      <img style={cardLogo} src={type === 'Visa' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/160px-Visa_Inc._logo.svg.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/240px-Mastercard-logo.svg.png'} alt="credit card logo" />
      <div style={cardNumber}>{number.slice(-4)}</div>
      <div style={cardExpiration}>Expires {expirationMonth}/{expirationYear}</div>
      <div>{bank}</div>
      <div>{owner}</div>
    </div>
  )
}

export default CreditCard;
