import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import masterCard from '../../assets/images/master-card.svg';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  if (type === 'Visa') {
    type = visa;
  } else {
    type = masterCard;
  }

  const formatedCardNumber = '***********' + (number.slice(12, 16));

  // 👇🏼 must fix regex down here to get ****** as well 👇🏼
  /* const FourFields = formatedCardNumber.replace(/\W/gi, '').replace(/(.{4})/g, '$1 '); */
 
  return (
    <div className="CardContainer" style={{ backgroundColor: `${bgColor}` }}>
    <div className='LogoImg'>
      <img src={type} alt='...'/>
    </div>
      <div className="CardText" style={{ color: `${color }`}}>
        <p className="CreditCardNumber" style={{ color: `${color }`}}>{formatedCardNumber}</p>
        <p className="Expiration">
          Expires {expirationMonth}/{expirationYear}
        </p>
        <p className="Bank">{bank}</p>
        <p className="Owner">{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
