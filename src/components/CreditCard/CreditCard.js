import "./CreditCard.css";
import visa from '../../assets/images/visa.png';
import mastercard from '../../assets/images/master-card.svg';

function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    return (
      <div className="row-spacing">
        <div
          className="card col"
          style={{ backgroundColor: bgColor, color: color }}
        >
          <div className="credit-card-logo">
            {type === 'Visa' ? (
              <img src={visa} alt="Visa logo" style={{ width: '40px' }} />
            ) : (
              <img
                src={mastercard}
                alt="Master Card logo"
                style={{ width: '40px' }}
              />
            )}
          </div>
          <div className="credit-card-number">
            <span>**** **** **** {number.slice(-4)}</span>
          </div>
          <div className="credit-card-info">
            <span>
              Expires {expirationMonth}/{expirationYear}
            </span>
            <span className="bank-name">{bank}</span>
            <div>{owner}</div>
          </div>
        </div>
      </div>
    );
}
export default CreditCard;