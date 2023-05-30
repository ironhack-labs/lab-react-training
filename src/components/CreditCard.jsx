function CreditCard(props) {
  const { creditCard } = props;

  function cardType() {
    if (creditCard.type === 'Visa') {
      return '../assets/images/visa.png';
    } else if (creditCard.type === 'Master Card') {
      return '../assets/images/master-card.svg';
    }
  }

  function cardNumber() {
    return creditCard.number.slice(-4);
  }

  function cardMonth() {
    if (creditCard.expirationMonth < 10) {
      return `0${creditCard.expirationMonth}`;
    } else {
      return creditCard.expirationMonth;
    }
  }

  function cardYear() {
    return creditCard.expirationYear.toString().slice(-2);
  }

  return (
    <div className="container">
      <div
        className="creditCard"
        style={{
          backgroundColor: `${creditCard.bgColor}`,
          color: `${creditCard.color}`,
        }}
      >
        <div className="cardType">
          <img src={cardType()} alt="cardType"></img>
        </div>
        <div className="cardNumber">
          <p>●●●● ●●●● ●●●● {cardNumber()}</p>
        </div>
        <div className="cardInfo">
          <p>
            Expires {cardMonth()}/{cardYear()} {creditCard.bank}
          </p>
          <p>{creditCard.owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
