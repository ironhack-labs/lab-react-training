import React from "react";

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const divStyle ={
        backgroundColor: `${bgColor}`, color: `${color}`, height:100, width:300    
    }

    let lastFour = number.substring(12, 15);
    let dots= '*'.repeat(4);

    return ( 
        <div style={divStyle} className="credit-card">
            {type}
            {dots} {dots}  {dots} {lastFour}
            {expirationMonth}
            {bank}
            {owner}
        </div>
    ) 
}
export default CreditCard;