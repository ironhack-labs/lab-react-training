import React from 'react';
import './index.css'

const CreditCard = (props) => {
  let logoImg;
  props.type === 'Visa' ? logoImg = "/img/visa.png" : logoImg = "/img/master-card.svg"

  const cardNumber = props.number.slice(-4)
    .padStart(props.number.length, '•')
    .replace(/(.{4})/g, '$1 ');

  let expMon;
  props.expirationMonth < 10 ? expMon = "0" + props.expirationMonth
    : expMon = props.expirationMonth

  let expYear = String(props.expirationYear).slice(2, 4)


  return (
    <div style={ {
      backgroundColor: props.bgColor,
      color: props.color,
      width: "400px",
      height: "200px",
      borderRadius: "15px",
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: "center",
      marginBottom: "2rem"
    } }
      className="creditCard">
      <img
        src={ logoImg }
        style={ {
          height: "25px",
          alignSelf: "flex-end",
          marginRight: "1rem"
        } }
        alt="logo Master-Card" />
      <h1>{ cardNumber }</h1>
      <div style={ {
        alignSelf: "flex-start",
        marginLeft: "2rem"
      } }>
        <h5 style={ { margin: "0" } }>Expires { expMon }/{ expYear } <span style={ { marginLeft: "2rem" } }>{ props.bank }</span></h5>
        <h5 style={ { margin: "0" } }>{ props.owner }</h5>
      </div>
    </div>
  )
}

export default CreditCard;