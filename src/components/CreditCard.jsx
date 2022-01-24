import React from 'react';
import VisaLogo from '../assets/images/visa.png'
import MasterLogo from '../assets/images/master-card.svg'

const CreditCard = (props) => {
    const card = () =>{
    if(props.type === "Visa"){
        return <img style={{height:"20px"}} src={VisaLogo} alt='Visa'></img>
    }else{
        return <img style={{height:"20px"}} src={MasterLogo} alt='masterCard'></img>
    }
}
  return (
 
  <div style={{backgroundColor:props.bgColor,color:props.color,width:'25%',borderRadius:"30px"}}>
    {card()}
    <p>**** **** **** {props.number.substring(12)}</p>
    <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
    <p>{props.bank}</p>
    <p>{props.owner}</p>
  </div>

  );
};

export default CreditCard;
