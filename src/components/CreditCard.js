import './CreditCard.css';
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
  return (
    <div className="card_CreditCard" style={{ backgroundColor: `${bgColor}`, color:`${color}` }}>
      <div style={{display:'flex', justifyContent:'flex-end'}}>
        <img src={type} />
      </div>
      <div style={{fontSize:'2rem', margin: '10px 0', fontWeight: '500'}}>
        <span>{number.replace('0123 4567 8901', '**** **** ****')}</span>
      </div>
      <div>
        <span style={{display:'flex', justifyContent:'flex-start', fontWeight: '500'}}>
          Expires {expirationMonth}/{expirationYear} <span style={{marginLeft:'20px'}}>{bank}
        </span></span>
      </div>
      <div>
        <span style={{display: 'flex', justifyContent:'flex-start'}}>{owner}</span>
      </div>
    </div>
  );
};

export default CreditCard;
