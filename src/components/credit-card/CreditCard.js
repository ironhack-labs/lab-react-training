import './CreditCard.css';
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/logo-Mastercard.png';

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
  type === 'Visa' ? (card = visa) : (card = mastercard);

  let cardNumber = number.slice(-4);

  let month = { ...expirationMonth };
  expirationMonth < 10
    ? (month = '0' + expirationMonth)
    : (month = expirationMonth);

  let year = expirationYear.toString().slice(-2);

  return (
    <div className="container-fluid my-2">
    <div className="row">
    <div
        className="credit-card d-flex flex-column justify-content-center"
        style={{ backgroundColor: `${bgColor}`, color: `${color}` }}
      >
        <img src={card} alt={type} className="align-self-end mt-4 me-3" />
        <div className="d-flex mt-3 ms-3">
          <div className="d-flex gap-1 px-2 align-self-center my-2">
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
          </div>
          <div className="d-flex gap-1 px-2 align-self-center my-2">
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
          </div>
          <div className="d-flex gap-1 px-2 align-self-center my-2">
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
            <i className="fa fa-circle"></i>
          </div>
          <h1 className="d-flex gap-1 align-self-center my-2">{cardNumber}</h1>
        </div>
        <div className="ms-4 mt-4">
          <div className="row">
            <h4 className="col-5">
              Expires: {month}/{year}
            </h4>
            <h4 className="col-7">{bank}</h4>
          </div>

          <h4>{owner}</h4>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default CreditCard;
