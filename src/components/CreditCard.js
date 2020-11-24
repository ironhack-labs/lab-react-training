import '../style/CreditCard.css'
import React from 'react';


function CreditCard(props) {
    return (
        <div className="cards">
            <div 
            style={{color: props.color,
            backgroundColor:props.bgColor}}
            className="CreditCard">
            <h4>{props.type}</h4>
            <h2>{coveredNums(props.number)}</h2>
            <span><p>
            Expires{' '}
            {props.expirationMonth < 10 ? `0${props.expirationMonth}` : props.expirationMonth}
                {'/'}
                {`${props.expirationYear}`.charAt(2)}{`${props.expirationYear}`.charAt(3)}
                {'  '}
                {`${props.bank}`}
                </p></span>
                {props.owner}
            </div>
        </div>
    )

    function coveredNums(num) {
        return `**** **** **** ${num.substring(12, 16)}`
    }
}

export default CreditCard;