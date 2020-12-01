import React from 'react'


export default function CreditCard(props) {
    const cardStyle = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    }

    let srcImg;
    if(props.type === "Master Card") {
        srcImg = `/img/master-card.svg`
    } else {
        srcImg = `/img/visa.png`
    }

    const number= '•••• •••• •••• ' + props.number.substring(12)

    return (
        <div className="card-box">
        <div className="credit-card" style={cardStyle}>
            <div className="credit-card-logo">
                <img className="logo" src={srcImg}/>
            </div>
            <div className="credit-card-number">{number}</div>
            <div className="credit-card-info">
                <div className="credit-card-info-expiry">
                    <div>Expires {props.expirationMonth}/{props.expirationYear}</div>
                    <div>{props.bank}</div>
                </div>

                <div className="credit-card-info-name">
                <div>{props.owner}</div> 
            </div>
            </div>  
        </div>
        </div>
    )
}

