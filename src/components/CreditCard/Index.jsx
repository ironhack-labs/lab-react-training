import './Index.css';
import VisaImg from '../../assets/images/visa.png';
//import MasterCard from '../../assets/images/master-card.svg';

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
  let card = '';

  if (type === 'Visa') {
    card = VisaImg;
  } /* else {
    card = MasterCard;
  }
 */
  if (expirationMonth < 10) {
    expirationMonth = `0${expirationMonth}`;
  }

  const divStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="container">
      <div className="CreditCard" style={divStyle}>
        <div className="type">
          <img src={card} alt="card"></img>
        </div>
        <div className="number">
          <h5> **** **** **** {number.slice(-4)}</h5>
        </div>
        <div className="expiration">
          <p>
            Expires: {expirationMonth}/{expirationYear}
          </p>
          <p className="bank">{bank}</p>
        </div>
        <div className="owner">
          <p>{owner}</p>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
