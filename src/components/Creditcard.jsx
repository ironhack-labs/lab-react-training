import PropTypes from 'prop-types';
import "./Creditcard.css"
import VisaLogo from  '../assets/images/visa.png'; 
import MasterLogo from '../assets/images/master-card.svg'; 


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
    const cardTypeLogo = type === 'Visa' ? VisaLogo: MasterLogo;
    const hiddenNumber = `•••• •••• •••• ${number.slice(-4)}`;
  
    const divStyle = {
      backgroundColor: bgColor,
      color: color,
    };
  
    return (
      <div className="credit-card" style={divStyle}>
        <div className="credit-card__logo">
          <img src={cardTypeLogo} alt={type} />
        </div>
        <div className="credit-card__number">{hiddenNumber}</div>
        <div className="credit-card__info">
          <div>
            <span>Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(2)}</span>
            <span className="credit-card__bank">{bank}</span>
          </div>
          <div>{owner}</div>
        </div>
      </div>
    );
  };
  
  CreditCard.propTypes = {
    type: PropTypes.string,
    number: PropTypes.string,
    expirationMonth: PropTypes.number,
    expirationYear: PropTypes.number,
    bank: PropTypes.string,
    owner: PropTypes.string,
    bgColor: PropTypes.string,
    color: PropTypes.string,
  };
  
  export default CreditCard;


  