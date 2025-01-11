import visaLogo from "../assets/images/visa.png";
import masterCardLogo from "../assets/images/master-card.svg";

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  let cardLogo;
  if (type == "Master Card") {
    cardLogo = masterCardLogo;
  } else {
    cardLogo = visaLogo;
  }
  let month = String(expirationMonth);
  month = month.length == 1 ? "0" + month : month;

  return (
    <div
      className="CreditCard"
      style={{ color: color, backgroundColor: bgColor }}
    >
      <div className="CreditCard_CardLogo">
        <img src={cardLogo} />
      </div>
      <div className="CreditCard_CardNumber">
        <p>•••• •••• •••• {number.slice(-4)}</p>
      </div>
      <div>
        <div className="CreditCard_ExpirationBank">
          <p>
            Expires {month}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <div className="CreditCard_Owner">
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;