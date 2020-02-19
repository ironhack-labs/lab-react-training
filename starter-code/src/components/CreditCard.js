import React from "react";
import styled from "styled-components";

const CreditCard = props => {
  const img = props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";
  const number = `●●●● ●●●● ●●●● ${props.number
    .split("")
    .splice(12, 4)
    .join("")}`;

  const Card = styled.article`
    background-color: ${props.bgColor};
    border-radius: 10px;
    height: 200px;
    width: 400px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    img {
      width: 50px;
      align-self: flex-end;
    }
    h6 {
      color: ${props.color};
      font-size: 20px;
      margin: 0;
    }
    div {
      width: 90%;
    }
    p {
      color: ${props.color};
      margin-top: 0;
      font-size: 15px;
      width: 90%;
    }
  `;

  return (
    <Card>
      <img src={img} alt="card type" />
      <h6>{number}</h6>
      <div style={{marginBotom: '0'}}>
        <p>
          Expires: {props.expirationMonth}/{props.expirationYear} {props.bank}
        </p>
        <p style={{marginTop: '0'}}>{props.owner}</p>
      </div>
      
    </Card>
  );
};

export default CreditCard;
