import React from "react";

const CreditCard = (props) => {

  const Style = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
  };



return (
    <div  style={Style}>
        <h3>{props.number}</h3>
        <h3>{props.owner}</h3>
        <h4>{`Expires ${props.expirationYear}`}</h4>

    </div>
)
};

export default CreditCard