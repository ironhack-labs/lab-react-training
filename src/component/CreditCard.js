import React from 'react'

export default function CreditCard(props) {
    const divStyle = {backgroundColor:`${props.bgColor}`,
    color: `${props.color}`,
    height:150,
    width:300
   
}
    
    return (
        <div>
        <div style={divStyle}>
            <p>{props.type==='Visa'&&<img src='/img/visa.png' alt=""height='8' width='20'/>}</p>
            <p>{props.type==="Master Card" && <img src="/img/master-card.svg" alt="" height="10" width="20" />}</p>
           <p> {props.number} </p>
           <p> {props.expirationMonth}/{props.expirationYear} {props.bank} </p>
           <p> {props.owner} </p>
        </div>
            
        </div>
    )
}
