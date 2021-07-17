import React from "react";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const divStyle = {
        backgroundColor: color
   }
    return (
        <div className="height-cards" >
            <div className="cards" style = {divStyle}>
                {divStyle.backgroundColor}
                {type}
                <br />
                {number}
                <br />
                {expirationMonth}

                {expirationYear}

                {bank}
                <br />
                {owner}
            </div>
        </div>
    )
}
export default CreditCard