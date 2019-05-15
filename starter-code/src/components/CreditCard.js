import React from "react";
import "./CreditCard.css";

const styleColor = (bgColor,fontColor) => {
  return {
    backgroundColor: bgColor,
    color:fontColor
  };
};

const brandImgSrc = type => {
  switch (type.toLowerCase()) {
    case "visa":
      return "img/visa.png";

    case "master card":
      return "img/master-card.svg";

    default:
      return "";
  }
};

const obfuscateCreditNumber = number => {
  return "•••• •••• •••• " + number.slice(-4);
};

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) => (
  <div className="creditCard" style={styleColor(bgColor, color)}>
    <div className="align-right">
      <img className="brandImg" src={brandImgSrc(type)} alt="type" />
    </div>
    <div className="creditNumber centered">
      <span>{obfuscateCreditNumber(number)}</span>
    </div>
    <div>
      Expires {`${expirationMonth}/${expirationYear.toString().slice(-2)}`}
      <span className="small-margin-left">{bank}</span>
    </div>
    <div>
      <span>{owner}</span>
    </div>
  </div>
);

export default CreditCard;
