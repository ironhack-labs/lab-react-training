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
    }
    return (
    <div style={card}>
        <h3 style={{ "text-align": "right","padding-right": 10}}>{type}</h3>
		<p style={{ "text-align": "center", "font-size": 30, margin: 1,}}>{number}</p>
        <div style={{ "text-align": "left",margin:1}}>
        <p>Expires {expirationMonth}/{expirationYear}
        <p  style={{display: 'inline-block',"padding-left": 10,margin:1}}>{bank}</p>
        <br/>{owner}</p>
        </div>
    </div>
    )
    
}
 




export default CreditCard