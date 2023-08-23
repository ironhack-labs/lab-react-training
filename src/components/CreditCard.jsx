function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const n = "•••• •••• •••• " + `${number.slice(-4)}`;

  const month = expirationMonth < 10 ? "0" + expirationMonth : expirationMonth;

  return (
    <div
      style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      class="col-3 rounded"
    >
      <div class="row-6 d-flex justify-content-end">
        <a>{type}</a>
      </div>
      <div class="row">
        <p>{n}</p>
      </div>
      <div class="row">
        <div class="col-5">
          <p>
            Expires {month}/{expirationYear}
          </p>
        </div>
        <div class="col d-flex justify-content-start">
          <p>{bank}</p>
        </div>
        <div class="row-8 d-flex justify-content-start">
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
