import React from 'react';
import "./CreditCard.css";

export default class CreditCard extends React.Component {
    render() {
       const card = this.props;
       let cardtype = card.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'
       let expireMonth = card.expirationMonth.toString().length === 1 ? '0' + card.expirationMonth : card.expirationMonth;
       let expireYear = card.expirationYear.toString().slice(2, 4);
 
       const cardStyle = {
          backgroundColor: card.bgColor,
          color: card.color
       }
 
       return ( 
          <div className = "CreditCard" style ={cardStyle}>
             <img src = {cardtype} alt={card.type}/>
             <div className="creditCardData">
                <p className="cardNumber"> ••• ••• ••• ••• {card.number.slice(12, 16)}</p> 
                <span className="expireDate">
                    Expires {expireMonth} / {expireYear}&emsp;{card.bank} 
                </span> 
                <p className="owner">{card.owner}</p> 
             </div>
          </div>
       );
    }
 }