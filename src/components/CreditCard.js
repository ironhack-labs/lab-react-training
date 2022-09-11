import mastercard from '../../src/assets/images/mastercard.png';
import visa from '../../src/assets/images/visa.png';
import creditCard from './creditCard.css';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  function setType(type) {
    if (type === 'Master Card') {
      return mastercard;
    } else if (type === 'Visa') {
      return visa;
    } else return '';
    }

    return (
      <div className="card" style={{ backgroundColor: `${bgColor}`}}>
        <div className="logo">
          <img src={setType(type)} alt="logo brand"></img>
        </div>
        <div className="number" style={{ color: `${color}` }}>
          <span><b>**** **** *** </b></span>
          <span>{number.split('').splice(12, 4)}</span>
        </div>
        <div className="data" style={{ color: `${color}` }}>
          <p>
            Expires {expirationMonth}/{expirationYear} {bank}
          </p>
          <p>{owner}</p>
        </div>
      </div>
    );
  }


export default CreditCard;
