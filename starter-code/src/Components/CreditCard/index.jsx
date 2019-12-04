import React from "react";

function CreditCard(info) {
  const style = {
    backgroundColor: `${info.bgColor}`,
    color: `${info.color}`,
    width: "400px",
    height: "150px",
    borderRadius: "4px",
    marginLeft: "1em"
  };

  const numbers = function(num) {
    let numString = num.toString().split("");
    return numString.splice(numString.length - 1 - 4, 4).join("");
  };

  return (
    <div style={style}>
      <h3>Number: **** **** **** {numbers(info.number)}</h3>
      <div>
        <div>
          <h5>
            Expires {info.expirationMonth}/{info.expirationYear}
          </h5>
          <h5>{info.bank}</h5>
        </div>
        <h5>{info.name}</h5>
      </div>
    </div>
  );
}

export default CreditCard;
