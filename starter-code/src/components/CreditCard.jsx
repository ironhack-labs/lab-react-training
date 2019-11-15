import React from "react";
const CreditCard = ({
  creditType,
  creditNumber,
  creditExpirationMonth,
  creditExpirationYear,
  creditBank,
  creditOwner,
  creditBgColor,
  creditColor
}) => (
  <div
    className="creditCards"
    style={{ backgroundColor: `${creditBgColor}`, color: `${creditColor}` }}
  >
    <div className="creditLogo">
      <h1>
        <img src={creditType} />
      </h1>
    </div>
    <div>
      <br></br>
      <br></br>
      <p className="creditNumber">{creditNumber}</p>
      <div>
        <span>
          expires {creditExpirationMonth}/{creditExpirationYear}
        </span>
        <span> {creditBank}</span>
      </div>
      <div>
        <p>{creditOwner}</p>
      </div>
    </div>
  </div>
);

export default CreditCard;
