import React from 'react'

function maskify(cc) {
    if (cc.length < 5) return cc
    return cc.slice(0, cc.length - 4)
        .split('')
        .map(function (num) {
            return '#'
        })
        .join('') + cc.slice(cc.length - 4)
}


export default function CreditCard(props) {
    let imgUrl = (props.type === "Visa") ? '../../img/visa.png' : '../../img/master-card.svg'

    return (
        <div className="credit-card" style={{backgroundColor: props.bgColor, color:props.color}} >
        <img src={imgUrl} alt ={props.type} />
        <h1>{maskify(props.number)}</h1>
        <p> Expires {('0' + props.expirationMonth).slice(-2)} / {(''+props.expirationYear).slice(-2)} {props.bank} </p>
        <p>{props.owner}</p>
        </div>
    );
}
