import React from 'react'
import "./CreditCard.css";

function CreditCard(props) {
        const style = {
                backgroundColor: `${props.bgColor}`,
                color: `${props.color}`,
                border: `1px solid`
        }
        function encryptNumberCard(number) {
                return "**** ".repeat(3) + number.substr(number.length - 4)
        }
        function showExp(year) {
                return year.toString().substr(2,2)
        }
        return (
                <div style={style} className="CreditCard">
                        <h3>{props.type}</h3>
                        <h3>{encryptNumberCard(props.number)}</h3>
                        <p>Expires {props.expirationMonth}/{showExp(props.expirationYear)}<span>{props.bank}</span></p> 
                        <p>{props.owner}</p>

                </div>
        )
}

export default CreditCard
