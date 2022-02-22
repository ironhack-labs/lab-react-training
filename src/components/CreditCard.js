import React from 'react'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div>CreditCard

            <p>Type: {type}</p>
            <p>Number: {number}</p>
            <p>Expiration month: {expirationMonth.toString()}</p>
            <p>Expiration year: {expirationYear.toString()}</p>
            <p>Bank: {bank}</p>
            <p>Owner: {owner}</p>
            <p>Bg color: {bgColor}</p>
            <p>Color: {color}</p>


        </div>
    )
}

export default CreditCard