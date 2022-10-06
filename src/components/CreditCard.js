function CreditCard(props) {
  const twoDigitMonth = (expirationMonth) =>
    expirationMonth < 10 ? 0 + { expirationMonth } : expirationMonth;

  return (
    <div>
      <div>
        <img src="" alt="card company" />
      </div>
      <p>{props.type}</p>
      <p>**** **** **** {props.number.slice(-4)}</p>
      <p>
        Expires: {twoDigitMonth} / {props.expirationYear}
      </p>
    </div>
  );
}

export default CreditCard;
