import React from 'react'

function logoImg(type) {
    if (type === 'Visa') {
        return './img/visa.png'
    } else {
        return './img/master-card.svg'
    } 
}

function numberToDots(string) {
    return string.slice(11,15)
}

const CreditCard = (props) => {
    return (
        <div className="col-3 credit-card" style={{background: `${props.bgColor}`, color: `${props.color}`}}>
            <div className="col-12">
                <span><img src={logoImg(props.type)} width="50" /></span>
                <div className="card-number">•••• •••• •••• {numberToDots(props.number)}</div>
                <div className="row">
                    <div className="col-8">Expires {props.expirationMonth} / {props.expirationYear}</div>
                    <div className="col-4">{props.bank}</div>
                </div>
                <div className="owner">{props.owner}</div>
            </div>
        </div>
    )
}
export default CreditCard
