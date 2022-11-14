import React from 'react'
import visa from '../assets/images/visa.png';
// import masterCard from '../assets/images/master-card.svg';

function CreditCard({ number,
    type,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
   }) {

    const replaceFirst12 = '**** **** **** ' + number.slice(12);
    let logo = type;
    if (type === "Visa") {
        logo = visa;
    } else if (type === "Master Card") {
        logo = visa;
    }
    return (
        <div className="card" style={{
            backgroundColor: `${bgColor}`,
            color: `${color}`,
        }}>
            <img src={logo} style={{
                marginLeft: "auto",
                width: "60px",
            }} alt="logo brand" />
            <p style={{
                textAlign: "center",
                fontSize: "24px",
                marginTop: "30px"
            }}>{replaceFirst12}</p>
            <div>
                <p style={{
                    margin: "0",
                }}>Expires {expirationMonth}/{expirationYear} {bank}</p>
            </div>

            <p style={{ margin: "0" }}>Expires {owner}</p>
        </div>
    )
}

export default CreditCard;