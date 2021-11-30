import './CreditCard.styles.css';

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
  } = props;

  const cardLogo = (type) => {
    if (type === 'Visa') return '/assets/images/visa.png';
    else if (type === 'Master Card')
      return '/assets/images/master-card.svg';
    else return null;
  };

  const month = (expirationMonth) => {
    if (expirationMonth < 10) return '0' + `${expirationMonth}`;
    else return `${expirationMonth}`;
  };

  const properties = { backgroundColor: `${bgColor}`, color: `${color}` };

  return (
    <div className="CreditCard" style={properties}>
      <div>
        <div>
          <img src={cardLogo(type)} alt={type} />
          <h4>
            <span>.... .... ....</span> {number.slice(-4)}
          </h4>
        </div>
      </div>
      <div>
        <p>
          Expires {month(expirationMonth)}/{expirationYear.toString().slice(-2)}
        </p>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
