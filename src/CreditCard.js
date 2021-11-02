import React from 'react';


function CreditCard(props) {


    return (
        
        <div className="Credit-Card-Container" style={{backgroundColor:props.bgColor, color: props.color}}>
     
            <div>
                <h2>{props.type}</h2>
            </div>
            <h4>{props.number.substr(-4)}</h4>
            <p>Expires: {props.expirationMonth} / {props.expirationYear}</p>
            <p>{props.bank}</p>
            <p>{props.owner}</p>     
        
        </div>
    )
}




export default CreditCard;