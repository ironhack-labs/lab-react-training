import React from 'react'
import '../assets/css/CreditCard.css'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    return (
    <div className='card__box'>
        <div className="CreditCard" style={{backgroundColor: bgColor, color:color}}>
                <p className="CreditCard__type">{type}</p>
                <p className="CreditCard__number"><b>&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;  &bull;&bull;&bull;&bull;</b> {number.slice(12)}</p>
                <div className="CreditCard__bankInfo">
                    <div className="CreditCard__bank">
                        <p>Expires {expirationMonth}/{expirationYear}</p>
                      
                    <p>{bank}</p>
                    </div> 
                    <p className="CreditCard__owner">{owner}</p>
                </div>

                </div>
    </div>       

    )
}





export default CreditCard 

