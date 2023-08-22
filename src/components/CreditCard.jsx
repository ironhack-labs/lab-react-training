function CreditCard(props) {
  const lastFourDigitsNumber = props.number.slice(-4);
  const lastTwoDigitsExpirationYear = props.expirationYear - 2000;

  function VisaOrMasterCard() {
    if (props.type === "Visa")
      return (
        <img className="type-card-img"
          src="https://img.freepik.com/icones-gratis/visto_318-202971.jpg"
          alt="Visa"
        />
      );
    else
      return (
        <img className="type-card-img"
          src="https://brandslogo.net/wp-content/uploads/2011/08/mastercard-logo.png"
          alt="Master Card"
        />
      );
  }

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: `${props.bgColor}`, color: `${props.color}` }}
    >
      {VisaOrMasterCard()}

      <p className="credit-card-number">
        <span>•••• </span> <span>•••• </span> <span>•••• </span>{" "}
        <span>{lastFourDigitsNumber}</span>
      </p>

      <div className="credit-card-details">
        <div className="credit-card-more-details">
          <p>
            Expires: {props.expirationMonth}/{lastTwoDigitsExpirationYear}
          </p>
          <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
