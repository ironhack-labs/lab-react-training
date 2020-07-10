import React from 'react'

export default function CreditCard(props) {
    const contStyle = {
        backgroundColor: props.bgColor,
        color: props.color,
    }

    return (
        <div style={contStyle} className="c-card">
            <div className="c-card-img">
                <img src={props.type} alt=""/>
            </div>
            <div className="c-card-num">
                <h3>{props.number}</h3>
            </div>
            <div className="c-card-features">
                <p>{props.expirationMonth} / {props.expirationYear}</p>
                <p>{props.bank}</p>
            </div>
            <div className="owner">
            <p>{props.owner}</p>
            </div>
            
        </div>
    )
}
