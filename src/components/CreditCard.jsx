
import visa from '../assets/images/visa.png';


function CreditCard(props) {
  const {
    type,
    number,
    owner,
    bgColor,
    color,
  } = props;

  
   
  return (
    <div className="creditCard" style={{ backgroundColor: `${bgColor}` }}>
      <div className="creditCardlogo">
        {type === 'Visa' && <img src={visa} alt="visa" />}
        {type === 'Master Card' && 
           <img src={visa} alt="masterCard" />
        }
      </div>
      <div  style={{ color: `${color}` }}>
        <h4 className="carNumber">{number} </h4>
        
        
        <p>{owner}</p>
    </div>
    </div>
  );
}

export default CreditCard;