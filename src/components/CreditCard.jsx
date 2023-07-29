

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props

  const logoSrc = type === 'Visa' ? 'visa.png' : 'master-card.svg'
  const styleSetup = {
    backgroundColor: `${bgColor}`,
    color: `${color}`
  }

  return (
    <div className="CreditCard" style={styleSetup}>
      <div className="card-logo">
        <img src={`${process.env.PUBLIC_URL}/${logoSrc}`} alt="logo" />
      </div>

      <div className="card-number">
        <span>⏺⏺⏺⏺ ⏺⏺⏺⏺ ⏺⏺⏺⏺ {number.slice(12)}</span>
      </div>
      <div className="card-data">
        <span>
          Expires {String(expirationMonth)}/{String(expirationYear).slice(2)}
        </span>
        <span>{bank}</span>
      </div>
      <div className="card-owner">
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard