import visaLogo from "../assets/images/visa.png";
/* import mastercardLogo from "../assets/images/master-card.svg" */

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  let cardNumber = number.slice(-4);
  let cardYear = expirationYear.toString().slice(-2);
  return (
    <div className="creditcard" style={{ backgroundColor: `${bgColor}` }}>
      <div className="logo">
        {type === 'Visa' && <img src={visaLogo} alt="Visa Logo" />}
        {type === 'Master Card' && 
           <img src={visaLogo} alt="Master Card Logo" />
        }
      </div>
      <div className="body-card" style={{ color: `${color}` }}>
        <h4 className="card-number">....   ....   ....   {cardNumber} </h4>
        <p>Expires {expirationMonth}/{cardYear}   {bank}</p>
        <p>{owner}</p>


      </div>
    </div>
  );
}

export default CreditCard;
