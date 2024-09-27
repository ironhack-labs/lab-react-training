import visa from "../assets/images/visa.png";
import master from "../assets/images/mastercard.png";

function CreditCard(details) {
  const typeimage = (details.type === "Visa") ? visa : master;
  const lastFour = details.number.slice(details.number.length-4,details.number.length);
  
  return (
    <div className="ccdiv" style={{backgroundColor: `${details.bgColor}`, color: `${details.color}`}}>

      <img className="cardlogo" alt="type of card" src={typeimage}/>
      <p className="cardnumbers">•••• •••• •••• {lastFour}</p>
      <p className="smallercard">Expires {details.expirationMonth}/{details.expirationYear}    {details.bank}</p>
      <p className="smallercard">{details.owner}</p>
    </div>
  )
}

export default CreditCard
