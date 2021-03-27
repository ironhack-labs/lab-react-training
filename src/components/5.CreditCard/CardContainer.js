import React from 'react'
import CreditCard from './CreditCard'
import './CardContainer.scss'
import { credit } from '../../data/credit'

const CardContainer = () => {
    return (
        <div className="CardContainer">
            {
                credit.map((card) => <CreditCard {...card} key={card.number}/>)
            }
        </div>
    )
}

export default CardContainer
