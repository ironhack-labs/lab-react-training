import React from 'react'
import "../styles/iteration5.css"


const getCCInfo = props => {
    return {
        logo: props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg",
        number: "**** **** **** " + props.number.slice(12),
        expire: props.expirationMonth+'/'+props.expirationYear.toString().slice(2),
    }
} 


const CreditCard = (props) => {
    return (
        <div className="credit-card" style={{backgroundColor: props.bgColor, color: props.color}}>
            <div className="credit-card-logo"><img className="logo" src={getCCInfo(props).logo} alt="logo"/></div>
            <div className="credit-card-num">{getCCInfo(props).number}</div>
            <div className="credit-card-expire"> Expires : {getCCInfo(props).expire} {props.bank}</div>
            <div className="credit-card-owner">{props.owner}</div>
        </div>
    )
}

export default CreditCard
