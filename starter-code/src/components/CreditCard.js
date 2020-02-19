import React from 'react'

function CreditCard(props) {
    let bankNumber = props.number
    let newBankNumber = bankNumber.substr(-4);
    let yearNumber = props.expirationYear.toString();
    let newYearNumber= yearNumber.substr(-2);
    let styles = {
        color: props.color,
        backgroundColor: props.bgColor
    };
    return (
        <div className="creditcar" style={styles}>
            <div className="type">
                <img src={props.cardimage} alt={props.type}/>
            </div>
            <div className="banknumber">
                <h2>•••• •••• •••• {newBankNumber} </h2>
            </div>
            <div className="expiration">
                <p>Expires {props.expirationMonth}/ {props.expirationYear} </p>
                <p> {props.bank} </p>
                <p> {props.owner} </p>

            </div>

            
        </div>
    )
}

export default CreditCard
