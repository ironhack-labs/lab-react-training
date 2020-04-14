import React from "react";

const CreditCard = (props) => {
  const type = () => {
    if (props.type === "Visa") return "./public/img/visa.png";
    if (props.type === "Master Card") return "../public/img/mastercard.png";
  };
  return (
    <div className="card">
      <img src="../public/img/visa.png" alt={props.type} />
    </div>
  );
};

export default CreditCard;
