import React from 'react';
import VisaLogo from '../assets/images/visa.png';
import MasterLogo from '../assets/images/master-card.svg';

const CreditCard = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    
    const Style = {
        backgroundColor: bgColor,
        color: color
    };

    const displayNum = number.toString().slice(-4);
    const month = expirationMonth;
    const card = () =>{
        if(type === "Visa"){
            return <img style = {{height: "15px"}} src={VisaLogo} alt="visa"></img>
        }else {
            return <img style = {{height: "15px"}} src={MasterLogo} alt="master"></img>
        }
    }

    return (
        <div className = "AllCards">
        <div className = "CreditCard" style={Style}>
        {card()}
        <p>•••• •••• •••• {displayNum}</p> 
        <p> Expires 0{month}/{expirationYear}<span>{bank}</span></p>
        <p>{owner}</p>
        </div>
        </div>
    )
}

export default CreditCard;