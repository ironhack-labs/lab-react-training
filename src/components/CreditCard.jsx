import visa from "../assets/images/visa.png";
import Mastercard from "../assets/images/master-card.svg";

function CreditCard(props) {
  const {
    type,
    number,
    bank,
    owner,
    bgColor,
    expirationMonth,
    expirationYear,
    color,
  } = props;

  const creditCardNumer = "* * * * · * * * * · * * * *" + number.slice(-4);

  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={type === "Visa" ? visa : Mastercard} />
      <p>{creditCardNumer}</p>
      <p>
        Expiration Date: {expirationMonth} / {expirationYear}
      </p>
      <p>{bank}</p>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
