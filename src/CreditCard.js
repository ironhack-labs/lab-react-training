import React from "react"
import "./creditcard.css"

export default function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}){
    return(
        <div className="CreditCard" style={{backgroundColor:`${bgColor}`}}>
      <div>
        <div className="type"><p>{type}</p></div>
        <div className="number"><p>{number}</p></div>
        <div className="expirationDate"> <p><b>Expires:</b>{expirationMonth}/{expirationYear}</p></div>
        <div className="owner">{owner}</div>
      </div>
    </div>
    )
}