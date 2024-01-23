import '../assets/images/master-card.svg'
import '../assets/images/visa.png'

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

    const cardLogo = type === 'Visa' ? 'visa.png' : 'master-card.svg';
  
    
    const maskedNumber =
      '•••• •••• •••• ' + number.slice(number.length - 4);
  
   
    const cardStyle = {
      backgroundColor: bgColor,
      color: color,
      padding: '20px',
      borderRadius: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '300px',
      position: 'relative',
    };
  
    
    const logoStyle = {
      width: '60px',
      position: 'absolute',
      top: '20px',
      right: '20px',
    };
  
    const infoStyle = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: '20px',
    };
  
    return (
      <div style={cardStyle}>
        <img src={`/./src/assets/images/${cardLogo}`} alt={type} style={logoStyle} />
        <p style={{ fontSize: '24px', marginBottom: '15px' }}>{maskedNumber}</p>
        <div style={infoStyle}>
          <p>
            Expires {expirationMonth}/{expirationYear % 100}
          </p>
          <p>{bank}</p>
          <p>{owner}</p>
        </div>
      </div>
    );
  };
  
  export default CreditCard;