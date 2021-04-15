function CreditCard(props) {
  const styleColor = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  function hiddeNumbers(number) {
    return '**** **** ****' + props.number.slice(-4);
  }

  return (
    <div style={styleColor} class="card w-75 ">
      <div class="card-body">
        <h3 class="card-title">{props.type}</h3>
        <p class="card-number">
          <strong>(hiddeNumbers({props.number}))</strong>
        </p>
        <span>
          Expires {props.expirationMonth}/{props.expirationYear}
        </span>
        <span className="bank">{props.bank}</span>
        <p> {props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
