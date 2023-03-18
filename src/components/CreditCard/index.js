function CreditCard(props) {
  const month = `0${props.expirationMonth}`.slice(-2);
  const year = props.expirationYear.toString().slice(-2);
  return (
    <div
      className="Credit-Card-In"
      style={{ backgroundColor: `${props.bgColor}` }}
    >
      <div className="Credit-Image">
        <img src={props.picture} width="60" height="25px" alt="card-type" />
      </div>
      <p className="Credit-Num"> •••••••••••• {props.number.slice(-4)} </p>
      <div className="Card-Info">
        <div className="Date-Card">
          <p>
            <b>Expires </b>
            {month} / {year}
          </p>
          <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
