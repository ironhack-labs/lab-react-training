import React from 'react'

function CreditCard(props) {
    return (
        <div>
            <div className="CreditCard">
                <h3>{props.type}</h3>
                <p>{props.number}</p>
                <p>{props.expirationMonth}</p>
                <p>{props.expirationYear}</p>
                <p>{props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}

export default CreditCard
