import React from 'react';

const CreditCard = props => {
  const divStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
    borderRadius: '10px  ',
    padding: ' 30px',
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: '20px',
    width: '300px',
  };
  const pStyle = { fontSize: '1.5rem' };
  const imgStyle = { width: '3rem' };

  return (
    <div style={divStyle} className="CreditCard">
      <img
        style={imgStyle}
        src={props.type === 'Visa' ? '../img/visa.png' : './img/master-card.svg'}
        alt="pic"
      />
      <div>
        <p style={pStyle}>**** **** **** {props.number.substr(12, 16)}</p>
        <p>{`Expires :${props.expirationYear}/${props.expirationYear}`}   {`${props.bank}`}</p>
        <p>{props.owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
