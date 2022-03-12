//jshint esversion:8


export const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

  return (
    <div className="Credit-card" style={{backgroundColor: bgColor, width: "350px", height: "150px"}}>
        <h2>{type}</h2>
        <p className="card-number">{number}</p>
        <p>Expires <span>{expirationMonth}/{expirationYear}</span> {bank} <br /> {owner}</p>
        
    </div>
  );
};