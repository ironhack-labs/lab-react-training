function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const sliced = '**** **** **** ' + number.slice(-4);
  return (
    <div
      className="flex flex-col rounded-lg bg-white dark:bg-neutral-700 md:max-w-xl md:flex-col"
      style={{
        color: `${color}`,
        width: '400px',
        height: '200px',
        backgroundColor: `${bgColor}`,
      }}
    >
      <h3>{type}</h3>
      <h1>{sliced}</h1>
      <d iv className="flex flex-row">
        <h5>
          Expires {expirationMonth}/{expirationYear}
        </h5>
        <h5 className="ml-5">{bank}</h5>
      </d>
      <h5>{owner}</h5>
    </div>
  );
}
export default CreditCard;
