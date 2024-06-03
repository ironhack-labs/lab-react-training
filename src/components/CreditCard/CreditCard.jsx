import "./CreditCard.css";
import visa from "../../assets/images/visa.png";
import master from "../../assets/images/master-card.svg";
const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  let imgUrl = "";
  if (type === "Visa") {
    imgUrl = visa;
  } else {
    imgUrl = master;
  }
  const hiddenNumber = `•••• •••• •••• ${number.slice(-4)}`;
  const cardStyles = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="credit-card m-auto mb-2" style={cardStyles}>
      <div className="logo-card">
        <img src={imgUrl} alt={type} />
      </div>
      <div className="hidden-number">{hiddenNumber}</div>
      <div className="expiration-date">
        <div className="d-flex no-margin">
          <p >
            {expirationMonth} / {expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
