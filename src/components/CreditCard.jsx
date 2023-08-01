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
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: color,
        width: '400px',
        borderRadius: '5px',
        padding: '5px',
        marginTop: '5px',
      }}
    >
      <h3
        style={{ color: 'blue', display: 'flex', justifyContent: 'flex-end' }}
      >
        {type}
      </h3>
      <h4>
        **** **** ****{' '}
        {Math.round((number / 10000 - Math.floor(number / 10000)) * 10000)
          .toString()
          .padStart(4, '0')}
      </h4>
      <span>
        <span>
          Expires {expirationMonth}/{expirationYear % 2000}
        </span>
        <span> {bank}</span>
      </span>
      <h4>{owner}</h4>
    </div>
  );
}

export default CreditCard;
