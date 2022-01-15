import React from "react";
import '../styles/CreditCard.css'
import visa from "../visa.png";
import masterCard from "../master-card.svg";


const CreditCard = ({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}) => {

        let cardCompany; 

        if (type === 'Visa') {
            cardCompany = visa;
        } else if (type === 'Master Card'){
            cardCompany = masterCard;
        }
    

    return (
        <div className='card-style' style={{backgroundColor: bgColor, color: color}}>
            <img src={cardCompany} className="card-img-company" alt="card company"/>
                <div className='div-number'>
                    <span className='secret-number'>**** **** **** </span>
                    <span className="card-number">{number.slice(-4)}</span>
                </div>
                <div className='dates'>
                    <span>Expires {expirationMonth}/{expirationYear}</span>
                </div>
                <div className='bank-name'>
                    <span>{bank}</span>
                </div>
                <div className='owner'>
                    <span>{owner}</span>
                </div>
        </div>
    );
};
 
export default CreditCard;