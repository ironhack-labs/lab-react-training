function CreditCard(props) {
  const cardContainer = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  function cardHideNum(card) {
    let hideNum = [];
    for (let i = 0; i < card.length; i++) {
      if (i < card.length - 4) {
        hideNum.push('•');
      } else {
        hideNum.push(card[i]);
      }
    }
    return hideNum.join('');
  }

  return (
    <div style={cardContainer} className="card-container">
      <img className="logo" src={props.src} alt="logo-card" />
      <p className="card-number">{cardHideNum(props.number)}</p>
      <div className="credit-card-text">
        <p className="card-exp-m">
          Expires {props.expirationMonth.toString()}/
          {props.expirationYear.toString()}
        </p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
