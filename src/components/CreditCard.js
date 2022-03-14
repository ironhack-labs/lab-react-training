//jshint esversion:8
import visa from "../assets/images/visa.png";
import mastercard from "../assets/images/master-card.svg";

export const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

  if(type === "Visa"){
    type = visa;
  } else {
    type = mastercard;
  }

  return (
    <div className="Credit-card" style={{backgroundColor: bgColor, width: "300px", height: "150px", color: color}}>
        <img src={type} alt="Card type"/>
        <p className="card-number">{number}</p>
        <p>Expires <span>{expirationMonth}/{expirationYear}</span> {bank} <br /> {owner}</p>
        
    </div>
  );
};