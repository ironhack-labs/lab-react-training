import React from 'react';
import './CreditCard.css';
import visa from '../../assets/images/visa.png'
import masterCard from '../../assets/images/master-card.svg'


const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
      return (
        <div clasName="container" style={{backgroundColor: bgColor, color: color}}>
            <div>
                <p className="logo">{type === "Visa" ? <img className="logo" src={visa} /> : <img className="logo" src={masterCard} />}</p>
            </div>
            <div>
                <p className="number">{number}</p>
            </div>
            <div>
                <div>
                    <p className="expiration">Expires {expirationMonth}/{expirationYear} {bank}</p>
                </div>
                <div>
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard