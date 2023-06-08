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
          color: props.color,
          width: '350px',
          height: '200px',
          backgroundColor: props.bgColor,
          borderRadius: '5px',
        }}
      >
        <img
          src={`/images/${
            props.type === 'Visa' ? 'visa.png' : 'master-card.svg'
          }`}
          style={{
            width: '50px',
          }}
          alt={props.type}
        />
        <div>
          &middot;&middot;&middot;&middot; &middot;&middot;&middot;&middot;
          &middot;&middot;&middot;&middot; {lastDigits}
        </div>
        {props.type}
        <div>
          {props.expirationMonth}/{props.expirationYear}{' '}
        </div>
        <div>{props.bank}</div>
        <div>{props.owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
