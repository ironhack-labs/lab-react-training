function CreditCard(props) {
  const lastDigits = props.number.slice(-4);

  return (
    <div
      style={{
        margin: '15px',
      }}
    >
      <div
        style={{
          color: `${props.color}`,
          width: '350px',
          height: '200px',
          backgroundColor: `${props.bgColor}`,
          borderRadius: '5px',
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
