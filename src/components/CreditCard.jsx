export default function CreditCard(props) {
  const maskCreditCardNumber = (ccn) => {
    const maskedCcn = ccn.slice(-4).padStart(16, '●');
    return (maskedCcn.match(/.{1,4}/g) ?? []).join(' ');
  };
  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div className="credit-card__logo">
        <img
          className="credit-card__img"
          src={
            props.type === 'Visa'
              ? '/images/visa.png'
              : 'images/master-card.svg'
          }
          alt="credit-card"
        />
      </div>
      <div className="credit-card__number">
        {maskCreditCardNumber(props.number)}
      </div>
      <div className="credit-card__bottom">
        <div className="credit-card__expBank">
          <div className="credit-card__expiracy">
            Expires
            <span class="credit-card__expiracy-date">
              {props.expirationMonth.toString().padStart(2, '0')}/
              {props.expirationYear.toString().padStart(2, '0')}
            </span>
          </div>
          {props.bank}
        </div>
        <div className="credit-card__owner">{props.owner}</div>
      </div>
    </div>
  );
}
