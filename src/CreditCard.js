import React from 'react';
import './CreditCard.css';



function CreditCard(props){

   
        let styles = {
            background: props.bgColor,
            color: props.color
        }
    

    return(
        <div className="CreditCard" style={styles}>
    <p className="type">{props.type}</p>
    <p>{props.number}</p>
    <div className="row">
    <div className="expiration">
    <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
    <p>{props.bank}</p>
    </div>
    </div>
    <p className="owner">{props.owner}</p>
        </div>

    );
};





export default CreditCard;