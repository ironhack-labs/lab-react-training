import React from 'react'

const CreditCard = (props) => {
    let img
    if (props.type == 'Visa') {
        img = '../img/visa.png'
    } else {
       img = '../img/master-card.svg' 
    }

    function prependZero(number) {
            if (number < 9)
                return "0" + number;
            else
                return number;
        }

    return (
        <div className="CreditCard card mb-3" style={{ backgroundColor: props.bgColor}}>
            <div className="row g-0">
                <div className="card-body">
                    <img src={img} width="50px" align="right"/>
                    <p className="card-text"></p>
                    <p className="card-text pl-3"> <h4><span>· · · · </span>&nbsp;<span> · · · · </span>&nbsp;<span> · · · · </span>&nbsp;{(props.number).substring(props.number.length - 4, props.number.length)}</h4></p>
                    <p className="card-text pl-3"><span>Expires: {prependZero(props.expirationMonth)}/{props.expirationYear} </span>&nbsp;&nbsp;&nbsp;<span>{props.bank}</span></p>
                    <p className="card-text pl-3">{props.owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard