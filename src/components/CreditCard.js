import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.png';

const CreditCard = (props) => {
  const { type, number, expirationMonth, expirationYear, bank, owner } = props;

  const ccCompany = type === 'Visa' ? visa : master;

  return (
    <div className="cc-card">
      <div className="cc-img">
        <img src={ccCompany} alt="cc-img" />
      </div>
      <div className="cc-number">•••• •••• •••• {number.slice(12)}</div>
      <div className="cc-info">
        Expires {`${expirationMonth}`.padStart(2, '0')}/
        {`${expirationYear}`.slice(2)} {bank}
        <div>{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
