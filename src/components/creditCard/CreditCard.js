import React from "react";

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const creditCardNumber = '**** **** ****' + number.slice(-4);
    return(
        <div
            style={{

            }}>
            <div>
                <h3>{type}</h3>
                <p>{creditCardNumber}</p>
            </div>
            <div>
                <h3>Expires</h3>
                <p>{expirationMonth}/{expirationYear} {bank}</p>
            </div>
            <div>
                {owner}
            </div>
        </div>
    )
};

export default CreditCard;