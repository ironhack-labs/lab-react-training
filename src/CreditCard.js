import React from 'react';
import './index.css'

const CreditCard = (props) => {
  let logoImg;
  if (props.type === 'Visa') {
    logoImg = <img
      style={{
        height: "25px",
        alignSelf: "flex-end",
        marginRight: "1rem"
      }}
      src={"/img/visa.png"}
      alt="logo Visa" />
  } else {
    logoImg = <img
      src={"/img/master-card.svg"}
      style={{
        height: "25px",
        alignSelf: "flex-end",
        marginRight: "1rem"
      }}
      alt="logo Master-Card" />
  }
  const cardNumber = "•••• •••• •••• " + String(props.number).slice(-4, )


  let expMon;
  if (props.expirationMonth < 10) {
    expMon = "0" + props.expirationMonth
  } else {
    expMon = props.expirationMonth
  }
  let expYear = String(props.expirationYear).slice(2, 4)


  return (
    <div style={{
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
    }}
      className="creditCard">
      {logoImg}
      <h1>{cardNumber}</h1>
      <div style={{
        alignSelf: "flex-start",
        marginLeft: "2rem"
      }}>
        <h5 style={{ margin: "0" }}>Expires {expMon}/{expYear} <span style={{ marginLeft: "2rem" }}>{props.bank}</span></h5>
        <h5 style={{ margin: "0" }}>{props.owner}</h5>

      </div>
    </div>
  )
}

export default CreditCard;