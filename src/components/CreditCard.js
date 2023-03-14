

//function CreditCard (props) {
//  type= {props.type},
//  number= {props.number},
//  expirationMonth= {props.expirationMonth},
//  expirationYear={props.expirationYear},
//  bank={props.bank},
//  owner={props.owner},
//  bgColor={props.bgColor},
//  color={props.color}
//}

import './CreditCard.css';

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
  const lastFourDigits = number.slice(-4);
  const maskedDigits = number.slice(0, -4).replace(/./g, '•');

  let srcType;


  type === 'visa' ? (srcType = '/assets/images/visa.png') : (srcType = '/assets/images/master-card.svg');

  return (
    <div style={{ height: '220px', width: '400px', backgroundColor: bgColor }} className="credit-card">

      <div id = "logo-card"> 
      <img id="img-card-type" src={srcType} alt="credit-card-img" />
      </div>


      <div id = "information-card">
      <p id="card-number" style={{ color }}>
        {maskedDigits}<span className="last-four">{lastFourDigits}</span>
      </p>
      <p id = "expiration" style={{ color }}>Expires {expirationMonth}/{expirationYear}</p>
      <p style={{ color }}>{bank}</p>
      <p style={{ color }}>{owner}</p>
      </div>

      </div>


  );
}

export default CreditCard;