
import './CreditCard.css';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color  }) => {
  

    const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    borderRadius: '10px',
    padding: '20px',
    width: '300px',
    height: '180px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '10px'
  };

   const maskedNumber = `**** **** **** ${number.slice(-4)}`;
    return (
    <div style={cardStyle} className="credit-card">
 
      <div className="id-card-details">
         <div>{type}</div>
         <div>{maskedNumber}</div>
         <div>Expire {expirationMonth}<div/>
         <div >{bank}</div>
         <div >{owner}</div>
      
        </div>
       
       
      </div>
    </div>
  );
};

export default CreditCard;