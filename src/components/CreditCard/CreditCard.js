import React from 'react';
import './CreditCard.css';
import visa from '../../assets/images/visa.png'
import masterCard from '../../assets/images/master-card.svg'


const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
      return (
        <div className="creditCardContainer" style={{backgroundColor: bgColor, color: color}}>
            <div>
                <p className="logo">{type === "Visa" ? <img className="logo" src={visa} alt={visa} /> : <img className="logo" src={masterCard}  alt={masterCard} />}</p>
            </div> 
            <div className="number">
                <p>{number}</p>
            </div>
            <div className="cardText">
                <p className="expiration">Expires {expirationMonth}/{expirationYear} {bank}</p>
                <p>{owner}</p>
            </div>

        </div>
    )
}

export default CreditCard