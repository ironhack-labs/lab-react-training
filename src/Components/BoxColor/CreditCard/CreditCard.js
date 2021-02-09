import React from 'react';

function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}){
    const card = {
        display: 'inline-block',
        borderRadius: 10,
        width: 350,
        "align-content": "center",
        margin: 10,
        padding: 10,
        background: `${bgColor}`,
        color:`${color}`


        // setEncrNum() {
        //     let slicedCard = this.number.slice(12)
        //     let symb = "⚫"
        //     let encNum = symb.repeat(12) + slicedCard  
        //     return encNum      
        //     } 
    }
    return (
    <div style={card}>
        <h3>{type}</h3>
		<p>{number}</p>
        <div>
        <p>Expires {expirationMonth}/{expirationYear}
        <p>{bank}</p>
        <br/>{owner}</p>
        </div>
    </div>
    )
}
export default CreditCard