import React from 'react'
import visa from '../assets/images/visa.png'
function CreditCard({ card }) {
    return (
        <div style={{ backgroundColor: '#3f977a', width: '400px', borderRadius: '5px' }}>
            <div className='credit-card'>
                <h1>{[...card.number]}</h1>
                <img src={visa} alt='visa logo' className='visa'></img>
            </div>
            <h4>Expires in {card.expirationMonth}{card.expirationYear}{card.bank}</h4>
            <h4>{card.owner}</h4>
        </div>
    )
}

export default CreditCard