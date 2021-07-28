import React from "react";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const divStyle = {
        backgroundColor: color
    }
    return (
        <div className="height-cards" >
            <div className="cards" style={divStyle}>
                <p className="bank">{type}</p>
                <p className="number"> {number}</p>
                <p>{bank}     {expirationMonth}/{expirationYear}</p>
                <p>{owner}</p>
            </div>
        </div>

    )
}
export default CreditCard