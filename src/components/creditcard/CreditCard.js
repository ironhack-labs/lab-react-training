import React from "react";


function CreditCard(props) {
    const cardStyle = {
        "background-color": props.bgColor,
        "color": props.color,
        "width": "250px",
        "display": "inline-block",
        "margin-right": "20px",
        "margin-bottom": "20px",
        "position": "relative"
    }
    const imgStyle = {
        "width": "50px",
        "position": "absolute",
        "top": "15px",
        "right":"15px"
    }
    const lastDigits = props.number.split("").slice(12).join("")

    const spanStyle = {
        "font-size": "12px"
    }
    const numberStyle = {
        "font-size": "20px",
        "margin-top": "60px",
        "margin-left": "20px"
    } 
    const dateStyle = {
        "font-size": "12px",
        "margin-top": "5px",
        "margin-bottom": 0,
        "margin-left": "10px"
    }
    const ownerStyle = {
        "font-size": "12px",
        "margin-top": 0,
        "margin-bottom": "10px",
        "margin-left": "10px"
    }
    return(

        <div className="card" style={cardStyle}>
<img src={props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg"} style={imgStyle}/>
<p style={numberStyle}>
    <span style={spanStyle}> &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679; &#9679;&#9679;&#9679;&#9679;</span> {lastDigits}
    </p>
    <p style={dateStyle}>Expires {props.expirationMonth}/{props.expirationYear}    {props.bank}</p> 
    <p style={ownerStyle}>{props.owner}</p> 
        </div>
    )
}

export default CreditCard