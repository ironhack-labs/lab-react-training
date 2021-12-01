import './CreditCard.styles.css';
import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/master-card.svg';

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
    if (type === 'Visa') return visa
    else return masterCard;
  };

  const month = (expirationMonth) => {
    if (expirationMonth < 10) return '0' + `${expirationMonth}`;
    else return `${expirationMonth}`;
  };

  const properties = { backgroundColor: `${bgColor}`, color: `${color}` };

  return (
    <div className="CreditCard" style={properties}>
      <div className='type'>
          <img src={cardLogo(type)} alt={type} />
      </div>
        <div className='number'>
          <p><span className='hide-number'>.... .... ....</span> {number.slice(-4)}</p>
        </div>
      <div className='expires-bank'>
        <span>Expires {month(expirationMonth)}/{expirationYear.toString().slice(-2)}</span>
        <span className='bank'>{bank}</span>
      </div>
      <p className='owner'>{owner}</p>
    </div>
  );
};

export default CreditCard;
