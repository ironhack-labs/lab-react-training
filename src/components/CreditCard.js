import React from 'react';


const CreditCard = (props) => {
    const cardStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }
    
    return(
        <div className='card-container' style={cardStyle}>
        {props.type === 'Visa' ? 
        <img src='/img/visa.png'/>
        :
        <img src='/img/master-card.svg'/>
        }

        <p className= 'card-number'>{`···· ···· ···· ${props.number.slice(-4)}`}</p>
        <div className='card-details'>
        <p>Exprires: {props.expirationMonth}/{props.expirationYear} {props.bank}</p> 
        <p>{props.owner}</p>
        </div>

        </div>
    )
}

export default CreditCard;