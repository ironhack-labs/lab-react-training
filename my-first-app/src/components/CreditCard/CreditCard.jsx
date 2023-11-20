import React from "react"
import visa from "./../../assets/visa.png"
import masterCard from "./../../assets/mastercardIcon.png"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let cardLogo

    if (type === "Visa") {
        cardLogo = visa
    } else {
        cardLogo = masterCard
    }

    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        padding: "15px",
        borderRadius: "10px",
        backgroundColor: bgColor,
        color: color,
        width: "400px",
        margin: "10px"
    }

    return (
        <div style={cardStyle}>
            <img src={cardLogo} alt={type} style={{ marginBottom: "10px", width: "100px" }} />
            <p>**** **** **** {number.slice(-4)}</p>
            <p>
                Expires {expirationMonth}/{expirationYear} {bank}
            </p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard