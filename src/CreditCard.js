import visa from "./assets/images/visa.png"
import masterCard from "./assets/images/master-card.svg"
const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner,bgColor,color } = props;
    return (
      <div className="CreditCard" style= {{backgroundColor: bgColor, color:color}}>
        <p>{type === "Visa" ? <img src={visa} alt= "Visa"/> : <img src={masterCard} alt= "mastercard"/>}</p>
        <p>{number}</p>
        <p>{expirationMonth}/{expirationYear}  {bank}</p>
        <p>{owner}</p>
      </div>
    );
  };
  export default CreditCard;
