import React from "react";

function CreditCard({type, number, expMonth, expYear, bank, owner, bgColor, color})
{
    const handleStyle = (backgroundColor, colorText) => ({
        backgroundColor: backgroundColor,
        color: colorText
    })

    const handleNumberCard = (nCard) => {
        let last4 = nCard.slice(-4);
        return "*".repeat(nCard.length - 4) + last4
    }

    return(
        <div className="creditCardContainer" style={handleStyle(bgColor, color)}>
            <h2>{type}</h2>
            <p>{handleNumberCard(number)}</p>
            <p>Expires {expMonth}/{expYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard