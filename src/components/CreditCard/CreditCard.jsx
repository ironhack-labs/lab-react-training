import "./CreditCard.css";
import visa from "../../assets/images/visa.png";
import masterCard from "../../assets/images/master-card.svg";

function CreditCard(props) {
  function getVisaType(type) {
    if (type === "Master Card") {
      return masterCard;
    }
    if (type === "Visa") {
      return visa;
    }
  }

  const bgColor = props.bgColor;
  const textColor = props.color;
  const cardNumBlr = (cardNumber) => {
    const cardStr = String(cardNumber);
    const masked = "•".repeat(cardStr.length - 4) + cardStr.slice(-4);
    return masked.replace(/(.{4})(?=.)/g, "$1 "); // Adds space after every 4 characters
  };
  const getMonth = (num) => {
    if (num <= 9) {
      let numToArr = num.toString().split("");
      return ["0", ...numToArr].join("");
    } else {
      return num;
    }
  };
  const getYear = (year) => {
    return year.toString().split("").slice(-2).join("");
  };

  return (
    <div
      className="creditCard"
      style={{ backgroundColor: `${bgColor}`, color: `${textColor}` }}
    >
        <div className="bank">
            <img src={getVisaType(props.type)} alt="" />
        </div>

        <div className="card-num">{cardNumBlr(props.number)}</div>

        <div className="info">
            <div>
            <p>
                Expires:{getMonth(props.expirationMonth)}/
                {getYear(props.expirationYear)}
            </p>
            <p>{props.bank}</p>
            </div>
            <p>{props.owner}</p>
        </div>
    </div>
  );
}

export default CreditCard;
