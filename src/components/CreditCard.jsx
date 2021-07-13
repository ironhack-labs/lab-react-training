import React from 'react'
import '../App.css'


function CreditCard(props){
    const lastFour = props.number.slice(12);

    const cardType = {
        'Visa' : '../img/visa.png',
        'MasterCard' : '../img/master-card.svg'
    }


    const color = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    return(
     <section className = 'Cards'>
        <article className = 'credit-card' style = {color}>
            <div className = 'card-logo'>
              <img src={cardType[props.type]} alt="Card Type" width='60px'/>
            </div>
            <div className = 'card-content'>
            <p>•••• •••• •••• {lastFour}</p>
            <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
            <p>{props.owner}</p>
            </div>
        </article>
    </section>
    )
}

export default CreditCard