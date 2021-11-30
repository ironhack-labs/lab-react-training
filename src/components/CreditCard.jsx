import React from 'react'

const CreditCard = (props) => {
    
    const { card } = props

    let divStyle = {
        backgroundColor: card.bgColor,
        color: card.color
    }

    let creditCardNumber = card.number.split('').splice(card.number.length - 4, 4)

    return (
        <div className='credit-card' style={divStyle}>
            <span className="type"> {card.type} </span>
            <span className="card-number">
                <small>● ● ● ● </small>
                <small>● ● ● ● </small>
                <small>● ● ● ● </small>
                {creditCardNumber}
            </span>
            <span className="card-info"> 
                <span>{card.expirationMonth} / {card.expirationYear}</span>
                <span className="bank-name"> {card.bank} </span>
            </span>
            <span className="card-owner"> 
                <span> {card.owner} </span>
            </span>
        </div>
    )
}

export default CreditCard
