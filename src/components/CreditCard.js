import React from 'react'

export default function CreditCard(props) {
    const divStyle = {
        background: `${props.bgColor}`,
        color: `${props.color}`,
    }
    return (
        <div className="mycard" style={divStyle}>
            <div className="flag">
                {props.type === "Visa" && <img src="/img/visa.png"/>}
                {props.type === "Master Card" && <img src="/img/master-card.svg" />}
            </div>
            <div className="cardInfo">
                <div className="number">
                    <p><strong>•••• •••• •••• {props.number.substring(12)}</strong></p>
                    <div className="bank">
                        <p>Expires {('0' + props.month).substring(-2)}/{(props.year).toString().substring(2)}</p>
                        <p>{props.bank}</p>
                    </div>
                    <div>
                        <p>{props.owner}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
