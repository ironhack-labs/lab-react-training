function CreditCard(props) {
  return (
    <div className="CreditCard">
      {props.type}
      {props.number}
      {props.expirationMonth}
      {props.expirationYear}
      {props.bank}
      {props.owner}
      {props.bgColor}
      {props.color}
    </div>
  );
}

export default CreditCard;
