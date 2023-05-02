import visaCard from '../assets/images/visa.png';



function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
  
    const cardTypeImage = type === 'Visa' ? '/assets/images/visa.png' : '/assets/images/master-card.svg';
    const formattedNumber = number ? '•••• •••• •••• ' + number.slice(-4) : '';
  
    const cardStyle = {
      backgroundColor: bgColor,
      color: color,
    };
  
    return (
      <div className="CreditCard" style={cardStyle}>
        <div className="credit-card-logo">
          <img src={visaCard} alt={type} width="150"/>
        </div>
        <div className="credit-card-number">{formattedNumber}</div>
        <div className="credit-card-details">
          <div>
            <span>Expires {expirationMonth}/{expirationYear}</span>
            <span>{bank}</span>
          </div>
          <div>{owner}</div>
        </div>
      </div>
    );
  }
  
  export default CreditCard;
  