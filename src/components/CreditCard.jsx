const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    width: '300px',
    height: '300px',
  };

  return (
    <div style={divStyle}>
      <p>{props.number}</p>
      <p>
        Expires {props.expirationMonth}/{props.expirationYear}{' '}
        <span>{props.bank}</span>
      </p>

      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
