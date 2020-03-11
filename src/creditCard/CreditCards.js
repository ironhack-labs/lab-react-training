import React from 'react'
import EachCard from './EachCard'
import './CreditCards.css'

const CreditCard = ({creditCards}) => {
    // console.log("Output for: CreditCard -> creditCards", creditCards)
    return (
        <div className="container credit-cards">
            {creditCards.map(card => <EachCard key={card.number} card ={card}/>)}
        </div>
    )
}

export default CreditCard
