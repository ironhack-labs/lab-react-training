import React from "react";

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
  console.log(expirationMonth);
  let month;
  if (expirationMonth < 10) {
    month = `0${expirationMonth}`;
  }
  return (
    <div style={{ color: `${color}`, backgroundColor: `${bgColor}`, width: "285px", height: "177px" }}>
      <img src={type} alt="" style={{ width: "40px" }} />
      <p>**** **** **** {number.slice(12, 16)}</p>
      <p>Expires {month}/{expirationYear.toString().slice(2, 4)} <span> {bank}</span></p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
