import React from 'react';
import './CreditCard.css';

//its functional, doesnt need extending component, dosnt have state
function CreditCard(props){
    let styles = {
        backgroundColor: props.bgColor,
        color: props.color
      };
    return (
        <div className="CreditCard" style={styles} >
            
            <span>{props.type}</span>
            <h2>{props.number}</h2>
            <span><p>Expires: {props.expirationMonth}/{props.expirationYear}</p>{props.bank}</span>
            <p> {props.owner.toUpperCase()}</p>
           
        </div>
        
    )
}
export default CreditCard;