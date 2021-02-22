import React from 'react';


const CreditCard = ({
    type, number, expirationMonth, expirationYear,
    bank, owner, bgColor, color
}) => {
    const imgGen = (type) => {
        switch(type) {
            case "Visa":
                return "/img/visa.png";
            case "Master Card":
                return "/img/master-card.svg";
        }
    }

    const styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    };

    return (
        <div className="CreditCard" style={styles}>
            <div className="type">
                <img src={imgGen(type)} alt={type} />
            </div>
            <div className="number">
                •••• •••• •••• {number.slice(-4)}
            </div>
            <div className="expire-date">
                <span>Expires {expirationMonth}/{expirationYear}</span>
                <span className="bank">{bank}</span>
            </div>
            <div className="owner">{owner}</div>
        </div>
    );
};

export default CreditCard;