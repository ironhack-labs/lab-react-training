import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import master from '../../assets/images/master-card.svg';

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

  const cardType = type === 'Visa' ? visa : master;
  const secretNumber = number.slice(-4);
  const month = ('0' + expirationMonth).slice(-2);
  const year = String(expirationYear).slice(-2);

  const divStyle = {
    background: bgColor,
    color: color,
  };

  return (
    <div className="creditCard-container" style={divStyle}>
      <div className="credit-img">
        <img src={cardType} alt={type} />
      </div>
      <div className="credit-number">
       <span>···· ···· ····</span> {secretNumber} 
      </div>

      <div className="credit-date">
        <span>
          Expires {month}/{year}
        </span>{' '}
        {bank}
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
