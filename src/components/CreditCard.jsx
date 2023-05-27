function CreditCard(props) {
  const divBackColor = {
    backgroundColor: `${props.bgColor}`,
  };
  return (
    <div style={divBackColor}>
      <div>
        {props.type === 'Visa' && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
            alt="Visa logo"
          />
        )}
        {props.type === 'Master Card' && (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
            alt="Master Card logo"
          />
        )}
      </div>
      <div>
        <p>**** **** **** {props.number.substr(12, 16)}</p>
      </div>
      <div>
        <p>
          Expires {props.expirationMonth}/
          {props.expirationYear.toString().substr(2, 4)}
        </p>
        <p>{props.bank}</p>
      </div>
      <div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
