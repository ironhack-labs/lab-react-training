import './CreditCard.css';

import visaImage from '../../assets/images/visa.png';
import masterCardImage from '../../assets/images/master-card.png';


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  return(
    <div className="credit-card" style={{
      backgroundColor: bgColor,
      color: color
    }}>
      <div className="d-flex flex-column">
        <div className="d-flex justify-content-end">
          <img src={type === 'Visa' ? visaImage : masterCardImage} alt={type}/>
        </div>
        <div className="credit-card__number">
          <span>&#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226; {number.substring(12)}</span>
        </div>
        <div className="d-flex credit-card__expire">
          <span>Expires <span className="credit-card__month">{expirationMonth.toString().padStart(2,0)}</span><span className="credit-card__year">{expirationYear.toString().substring(2,4)}</span></span>
          <span>{bank}</span>
        </div>
        <div className="d-flex credit-card__owner">
          <span>{owner}</span>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;