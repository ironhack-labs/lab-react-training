import React from "react";

export default function CreditCard(props) {
  return props.type === "visa"
    ? <div className="card" style={{ backgroundColor: props.bgColor }}>
        <img
          className="credit"
          src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/visa.png"
        />
      </div>
    : <div className="card" style={{ backgroundColor: props.bgColor }}>
        <img
          className="credit"
          src="https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.com/img/master-card.svg"
        />
      </div>;
}
