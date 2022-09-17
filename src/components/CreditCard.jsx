import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/master-card.png';

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
  return (
    <div className="creditCard">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-4 mx-3 p-1">
          <div
            className="card"
            style={{ backgroundColor: bgColor, color: color }}
          >
            <div className="credit-card-img">
              <img
                className="m-3"
                style={{ width: '70px', height: '30px' }}
                src={type === 'Visa' ? visaLogo : masterCardLogo}
                alt="credit-card"
              />
            </div>

            <div className="card-body">
              <h1 className="card-title mt-1 mb-5">
                .... .... .... {number.slice(-4)}
              </h1>
              <h5 className="card-text text-start my-2">
                Expires{' '}
                {expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth}
                /{expirationYear % 100} {bank}
              </h5>
              <h5 className="card-text text-start my-2">{owner}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
