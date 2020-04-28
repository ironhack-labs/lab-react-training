import React from "react";

const CreditCard = (props) => {
    const cardLogo = {
        Visa: "img/visa.png",
        MasterCard: "img/master-card.svg"
    }

    const secureNum = (number) => {
        const regex = /(?=\d)\d{12}/;
        number = number.replace(regex, '**** **** **** ');
        return number;
    }

    const formatMonth = (num) => {
        return num < 10 ? "0" + num : num;
    }

    const formatYear = (year) => {
        const regex = /(?=\d)\d{2}/
        return year.toString().replace(regex, "")
    }

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

    const style = {
        backgroundColor: bgColor,
        color: color,
    }

    return (
        <div style={style} className="card-box">
            <div className="img-container">
                <img className="cardImg" src={cardLogo[type]} alt="" />
            </div>
            <div>
                <h2>{secureNum(number)}</h2>
            </div>
            <div className="card-owner">
                <p>Expires {formatMonth(expirationMonth)}/{formatYear(expirationYear)} <span>{bank}</span></p>
                <p>{owner}</p>
            </div>
        </div>
    )

}

export default CreditCard;