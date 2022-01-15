import React from "react";
import "./CreditCard.css";
import VisaLogo from './visa.png';
import MasterCard from './master-card.svg'

const CreditCard = (props) => {
    let typeCard = {};
   if(props.type === 'Visa'){
     typeCard = VisaLogo;
    }if (props.type === 'Master Card'){
    typeCard =MasterCard;
    }

        return (
            <div className="creditCard" style= {{backgroundColor: props.bgColor, color: props.color}}>
           <div className="type-card">
            <img src= {typeCard} alt=""/>
            </div>
            <div className="cardNumber">
            •••• •••• •••• {props.number.slice(12)}  
            </div>
            <div className="exp-and-bank">
                <div className="exp">
                    <p>Expires {props.expirationMonth}{props.expirationYear}</p>
                </div>
                <p>{props.bank}</p>
            </div>
            <p className="owner"> {props.owner}</p>
            </div>
            )

}

export default CreditCard;