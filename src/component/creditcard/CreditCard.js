import React from 'react';
import 'bulma/css/bulma.css';
import './CreditCard.css'


const CreditCard = props =>{
    const number = props.number.replace(/^.{12}/g, '**** **** **** ');
    const expirationMonth = props.expirationMonth.toString()
    const expirationYear = props.expirationYear.toString().slice(-2)
    const bank = props.bank
    const owner = props.owner
    const bgColor = props.bgColor
    const color = props.color
    const imgSrc = props.type=== 'Visa' ? '../img/visa.png' : '../img/master-card.svg'

    
    return (
        <div className="card" style={{background:`${bgColor}`, color:`${color}`}}>
            <div className="card-content">
                <div className="columns is-mobile">
                    <div className="column is-3 is-offset-9">
                        <div className="media">
                            <div className="media-right"> 
                                <figure className="image is-48x48"><img src={imgSrc} alt='card brand'/></figure>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns is-mobile">
                    <div className="column is-12 has-text-left">
                        <p className='bigText'>{number}</p>
                        <p>Expires {expirationMonth}/{expirationYear}<span id='bank'>{bank}</span></p>
                        <p>{owner}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export {CreditCard}