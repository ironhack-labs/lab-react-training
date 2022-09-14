function CreditCard(props) {
  return (
    <div
      classeName="CreditCard"
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <div>{props.type}</div>
      <p>**** **** **** {}</p>
      <p>
        Expire : {props.expirationMonth}/ {props.expirationYear}
        {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
