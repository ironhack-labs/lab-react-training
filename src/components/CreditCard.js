import visaLogo from '../assets/images/visa.png';
import mcLogo from '../assets/images/mastercardLogo.png';

const CreditCard = (props) => {
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props;
    const year = expirationYear.toString();
    return (
      <div className="creditCard" style={{backgroundColor: `${bgColor}`, color: `${color}`}}>
        {type === 'Visa' && <img className='cardLogo' src={visaLogo} alt='logoVisa'/>}
        {type === 'Master Card' && <img className='cardLogo' src={mcLogo} alt='logoMC'/>}
        <span style={{fontSize: '28px'}}>**** **** **** {number[12]}{number[13]}{number[14]}{number[15]} </span>
        <span>Expires 0{expirationMonth}/{year[2]}{year[3]}       {bank}</span>
        <span>{owner}</span>
      </div>
    );
  };
  
  export default CreditCard;