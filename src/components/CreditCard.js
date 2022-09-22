function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let expirationMonthString;
  expirationMonth < 10
    ? (expirationMonthString = '0' + expirationMonth)
    : (expirationMonthString = '' + expirationMonth);
  return (
    <div className="creditCard" style={{ background: bgColor, color: color }}>
      <div className="cardType">
        <div className="cardImg">
          <img
            src={
              type === 'Visa'
                ? 'https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png'
                : 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png'
            }
            alt={type}
          />
        </div>
      </div>
      <div className="cardNumber">
        <p className="cardNumber">
          **** **** **** {number.toString().slice(-4)}
        </p>
      </div>
      <div className="cardInfo">
        <p className="cardExpire">
          Expires {expirationMonthString}/{expirationYear.toString().slice(-2)}
          <span className="cardBank">{bank}</span>
        </p>
        <p className="cardName">{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
