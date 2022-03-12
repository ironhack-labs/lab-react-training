export const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const creditCardNum = '**** **** **** ' + number.slice(-4);

  return (
    <div
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: '18rem',
        borderRadius: '6px',
        paddingRight: '10px',
        paddingLeft: '10px',
      }}
    >
      <div>
        <h3 style={{ textAlign: 'right' }}>
          <i>{type}</i>
        </h3>
        <p style={{ textAlign: 'left', fontSize: '30px' }}>{creditCardNum}</p>
      </div>

      <div>
        <p style={{ textAlign: 'left', fontSize: '0.8rem' }}>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p
          style={{ textAlign: 'left', marginTop: '-15px', fontSize: '0.8rem' }}
        >
          {owner}
        </p>
      </div>
    </div>
  );
};
