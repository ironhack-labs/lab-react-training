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

  // format data
  const expirationYearCopy = expirationYear.toString().slice(2);
  const getExpirationMonth = (expMonth) => {
    let expMonthStr = expMonth.toString();
    if (expMonthStr.length === 1) expMonthStr = "0" + expMonthStr;
    return expMonthStr;
  }
  const getDottedCardNum = (cardNum) => {
    let cardNumStr = cardNum.toString();
    cardNumStr = "•••• •••• •••• " + cardNumStr.slice(-4);
    return cardNumStr;
  }
  const getCardLogoLink = (cardType)=>{
    if (cardType === "Visa"){
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
    } else if (cardType === "Master Card"){
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"
    }
  }

  return (
    <div
      className="one-bank-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {/* <h1 className="type-logo">{type}</h1> */}
      <div className="card-logo"><img src={getCardLogoLink(type)} alt="" /></div>

      <h2 className="card-number">{getDottedCardNum(number)}</h2>

      <div className="exp-bank">
        <p className="card-text">
          Expires {getExpirationMonth(expirationMonth)}/{expirationYearCopy}
        </p>
        <p className="card-text">{bank}</p>
      </div>

      <p className="card-text">{owner}</p>

    </div>
  );
}
export default CreditCard;