const CreditCard = (props) => {
  let {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  let img = '';
  if (type === 'Visa') {
    img = '/Visa-Logo-PNG-Image.png';
  } else img = '/mastercard-png.png';
  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };
  const lastNumbers = number.slice(-4);
  if (expirationMonth < 10) {
    expirationMonth = '0' + expirationMonth;
  }
  const imgStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '50px',
    width: '100px',
  };
  return (
    <div style={divStyle}>
      <div>
        <div style={imgStyle}></div>
        <h4>.... .... .... {lastNumbers}</h4>
      </div>
      <div>
        <p>
          Expires {expirationMonth}/
          {(expirationYear = expirationYear.toString().slice(-2))}
          <span>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
};
export default CreditCard;
