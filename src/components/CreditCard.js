import React from 'react';


const CreditCard = (props) => {
    let cardStyle = {
        backgroundColor : props.bgColor,
        color: props.color
    }

    let imgUrl = ""
    props.type === "Visa" ? imgUrl = "./img/visa.png": imgUrl = './img/master-card.svg'

    let cardNumber = "•••• •••• •••• " + props.number.slice(-5, -1)

    let month = "0"+props.expirationMonth.toString()
    let expireDate = month.slice(0,2) + "/" + props.expirationYear.toString().slice(0,2)

    return (
        <div className="card" style={cardStyle}>
            <div className="logo">
                <img src= {imgUrl} alt={props.type} height="20px" />
            </div>
            <p className="numbers">{cardNumber}</p>
            <div className="expires">
                <p>Expires {expireDate}</p>
                <p>{props.bank}</p>
            </div>
            <p className="owner">{props.owner}</p>
        </div>
    )
}

export default CreditCard