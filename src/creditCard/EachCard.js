import React from 'react'
import './CreditCards.css'

const EachCard = ({card}) => {
   const getStyle ={
          background: `${card.bgColor}`,
          color: `${card.color}`
        };
    
    return (
        <div>

            <div className="each-card" style={getStyle}>
                <div className="card-logo"> {card.type} </div>
                <div className="card-number">{card.number} </div>
                <div className="card-exp-bank">Expires <span>{card.expirationMonth}/{card.expirationYear.toString().slice(-2)}</span>   <span>{card.bank} </span></div>
                <div className="card-owner"> {card.owner} </div>
            </div>

        </div>
    )
}

export default EachCard
