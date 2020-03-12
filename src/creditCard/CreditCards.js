import React from 'react'
import EachCard from './EachCard'
import './CreditCards.css'

const CreditCard = ({creditCards}) => {
    // console.log("Output for: CreditCard -> creditCards", creditCards)
    return (
        <div className="container credit-cards">
            <h2>Iteration 5: Component: CreditCard</h2>
            <hr/>
            {creditCards.map(card => <EachCard key={card.number} card ={card}/>)}
        </div>
    )
}

export default CreditCard
