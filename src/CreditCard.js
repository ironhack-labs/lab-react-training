import './CreditCard.css';
import {renderLogo, renderCardNumber} from './creditCardHelpers.js'

const CreaditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const style = {
        background: bgColor,
        color: color
    }
    return (
      <article className="CreditCard" style={style}>
        <div className="CreditCard__logo">{renderLogo(type)}</div>
        <h3>{renderCardNumber(number)}</h3>
        <p>
          Expires
          <span>
            {expirationMonth}/{expirationYear}
          </span>
          <span>
            {bank}
          </span>
        </p>

        <p>{owner}</p>
      </article>
    );
}
 
export default CreaditCard;