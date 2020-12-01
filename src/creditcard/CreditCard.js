import React from 'react'
import './CreditCard.css'

export default function CreditCard(props) {
    let srcImg
    if(props.type==="Master Card"){
        srcImg=`./img/master-card.svg`;
    }else{
        srcImg=`./img/visa.png`;
    }

    const styling={backgroundColor: `${props.bgColor}`,color:`${props.color}`}
    const number= '•••• •••• •••• ' + props.number.substring(12)
    return (
        <div>
            <div className="credit-card" style={styling}>
                <div className="logo"><img src={srcImg} alt="logo"/></div>
                <div className="number"><p>{number}</p></div>
                <div className="info">
                    <p><span>Expires {props.expirationMonth}/{props.expirationYear}</span> <span>{props.bank}</span></p>
                    <p>{props.owner}</p>
                </div>
            </div>
        </div>
    )
}
