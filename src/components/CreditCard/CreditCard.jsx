import { type } from "@testing-library/user-event/dist/type"

function CreditCard(props) {
    const {img, type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    
  return (
    <div style={{backgroundColor: `${bgColor}`, color: `${color}`}} class="creditCard">
        <span class="creditCard-logo">
            <h6>{type}</h6>
            <img src={img} alt="credit card" />
        </span>
        <span className="creditCard-number">
            <h4>{number}</h4>
        </span>
        <span className="creditCard-expiry">
            <p>Expires: {expirationMonth}/{expirationYear}</p>
            <p className="creditCard-bank">{bank}</p>
        </span>
        <span className="creditCard-owner">
            <p>{owner}</p>
        </span>
    </div>
  )
}

export default CreditCard