import Visa from '../assets/images/Visa.png';
import MasterCard from '../assets/images/Master Card.png';
import './CreditCard.css';

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
  const cardPhoto = (type) => {
    if (type === 'Visa') {
      return Visa;
    } else {
      return MasterCard;
    }
  };

  const blurNumber = (number) => {
    return number.slice(-4);
  };

  const getExpirationYear = (expirationYear) => {
    return +expirationYear.toString().slice(-2);
  };

  const getExpirationMonth = (expirationMonth) => {
    if (expirationMonth <= 9) {
      return `0${expirationMonth}`;
    } else {
      return expirationMonth;
    }
  };

  const getColor = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <div>
      <div className="card credit-div mb-3" style={getColor}>
        <div className="card-body d-flex flex-column align-content-center ">
          <img
            className="card-img align-self-end mb-5"
            src={cardPhoto(type)}
            alt="Card"
          />
          <div className="fs-4 card-text align-self-center">
            **** **** **** {blurNumber(number)}
          </div>
        </div>
        <span className="d-flex flex-column ps-5 pb-5">
          <div className="d-flex gap-2">
            <div>Expires</div>
            <div>
              {getExpirationMonth(expirationMonth)}/
              {getExpirationYear(expirationYear)}
            </div>
            <div>{bank}</div>
          </div>
          <div>{owner}</div>
        </span>
      </div>
    </div>
  );
}

export default CreditCard;
