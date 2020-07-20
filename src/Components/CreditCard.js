import React from 'react'

const CreditCard = (props) => {

    const cryptNumber = () => {
        var last4digits = String(props.number).slice(-4)
        return `•••• •••• •••• ${last4digits}`
    }
    
    const year = () => {
        var year2digits = String(props.expirationYear).substring(2)
        return `${year2digits}`
    }
    return (
        <div className="credit-card" style={{backgroundColor:`${props.bgColor}`, color: `${props.color}`}}>
        <div className="image padding">
        <img className="cb-img" src={props.type} alt="coucou"/>
        </div>
        <div className="number padding">
        <p>{cryptNumber()}</p>
        </div>
        <div className="expiration padding">
        <p>Expires {props.expirationMonth}/{year()}</p>
        <p className="bank">{props.bank}</p>
        </div>
        <div className="name padding">
        <p>{props.owner}</p>
        </div>
        </div>
    )
}


export default CreditCard
