import React from "react"




function CreditCard(props) {

    let backgroundColor = props.bgColor
    let textColor = props.color

    let cardStyle = {
        width: "500px",
        height: "250px",
        border: "1px solid black",
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: "10px"
    }

    return (
        <div style={cardStyle}>
          <p>{props.type}</p>
          <p>{props.number}</p>
          <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
          <p>{props.owner}</p>
        </div>
    )
}



export default CreditCard