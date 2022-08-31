import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/martercad-logo.png';

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
  expirationMonth < 10 ? (month = '0' + expirationMonth) : (month = expirationMonth);

  let year = expirationYear.toString().slice(-2);

  return (
    <div className="d-flex flex-column" style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
        <img src={card} alt={type} className="align-self-end"/>
      <div className="d-flex">
      <div className="d-flex gap-1 px-2 align-self-center my-2">
        <i className="fa fa-circle"></i>
        <i className="fa fa-circle"></i>
        <i className="fa fa-circle"></i>
        <i className="fa fa-circle"></i>
      </div>
      <div className="d-flex gap-1 px-2 align-self-center my-2">
        <i className='fa fa-circle'></i>
        <i className='fa fa-circle'></i>
        <i className='fa fa-circle'></i>
        <i className='fa fa-circle'></i>
      </div>
      <div className="d-flex gap-1 px-2 align-self-center my-2">
        <i className='fa fa-circle'></i>
        <i className='fa fa-circle'></i>
        <i className='fa fa-circle'></i>
        <i className='fa fa-circle'></i>
      </div>
        <h1 className="d-flex gap-1 align-self-center my-2">{cardNumber}</h1>
        <div className="d-flex">
          <h4>Expires: {month}/{year}</h4>
          <h4>{bank}</h4>
          <h4>{owner}</h4>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
