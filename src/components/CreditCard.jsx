function CreditCard(props) {
  const divBackColor = {
    backgroundColor: `${props.bgColor}`,
  };
  return (
    <div className="CreditCard" style={divBackColor}>
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
      <div className="CC-Numbers">
        <p>**** **** **** {props.number.substr(12, 16)}</p>
      </div>
      <div className="CC-User">
        <div className="CC-Data">
          <p>
            Expires {props.expirationMonth}/
            {props.expirationYear.toString().substr(2, 4)}
          </p>
          <p>{props.bank}</p>
        </div>

        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
