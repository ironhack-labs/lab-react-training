import "./index.css";
import React from 'react';
import visa from '../../../assets/images/visa.png';
import master from '../../../assets/images/MasterCard_Logo.png';


function CreditCard({ type, number, expM, expY, bank, owner, bgColor, color}) {
    const imgUrl = type === 'Visa' ? visa : master;
    const lastNumbers = number.slice(12);
    const month = expM.toString().length === 2 ? expM : '0' + expM.toString();
    const year = expY.toString().slice(2);

    const divStyle = {
        backgroundColor: bgColor,
        color: color
    };

    return (
        <div className="creditcard-container" style={divStyle}>
            <div className="logo">
                <img src={imgUrl} alt={type} />
            </div>
            <div className="number">
                <p>&#9679; &#9679; &#9679; &#9679;</p>
                <p>&#9679; &#9679; &#9679; &#9679;</p>
                <p>&#9679; &#9679; &#9679; &#9679;</p>
                <p>{lastNumbers}</p>
            </div>
            <div className="expires">
                <p>Expires {month}/{year}</p>
                <p>{bank}</p>
            </div>
            <div className="name">
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;
