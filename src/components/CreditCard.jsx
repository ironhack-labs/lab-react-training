function CreditCard(props) {
  const lastDigits = props.number.slice(-4);

  return (
    <div>
      <h1>Credit Card Types:</h1>
      <div
        style={{
          color: `${props.color}`,
          width: '350px',
          height: '200px',
          backgroundColor: `${props.bgColor}`,
        }}
      >
        <div>{lastDigits}</div>
        {props.type}
        <div>
          {props.expirationMonth}/{props.expirationYear}
          {props.bank}
          <div>{props.owner}</div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
