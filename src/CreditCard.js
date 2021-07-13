import React from "react"
import PropTypes from "prop-types";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    // eslint-disable-next-line react/prop-types
    const divStyle = {
        backgroundColor: `${ bgColor }`,
        color: `${color}`
    };
let fourDigits = number.substring(11, 15);
let dots = '*'.repeat(4);
    return (
        <>
            <div id="credit-card" style={divStyle}>
                <p id="title">{type}</p>
                <p id="number">{dots} {dots} {dots} {fourDigits}</p>
                <div>
                    <span>Expires {expirationMonth}/{expirationYear}</span>    <span>{bank}</span>
                </div>
                <p>{owner}</p>
        </div>
        </>
    )
}



CreditCard.propTypes = {
    type: PropTypes.oneOf(["visa", "mastercard"]),
    number: PropTypes.string,
    expirationMonth: PropTypes.number,
    bank: PropTypes.string,
    owner: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
}

export default CreditCard