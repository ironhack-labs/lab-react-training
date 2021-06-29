function CreditCard(props) {
  return (
    <div>
      <ul>
        <li>{props.type}</li>
        <li>{props.number}</li>
        <li>{props.expirationMonth}</li>
        <li>{props.expirationYear}</li>
        <li>{props.bank}</li>
        <li>{props.owner}</li>
        <li>{props.bgColor}</li>
        <li>{props.color}</li>
      </ul>
    </div>
  );
}

export default CreditCard;
