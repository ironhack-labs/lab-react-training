import visaImg from '../assets/images/visa.png';
import masterCardImg from '../assets/images/mastercard.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const dottedCardNr =
    number.substring(0, 12).replace(/./g, '*') + number.substring(12);
  console.log(dottedCardNr);
  //.match + regex divides the string into 4-character arrays, .join puts them into 1 string with a space between
  const dottedCardNrSpaces = dottedCardNr.match(/.{1,4}/g).join(' ');

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {type === 'Visa' ? <img src={visaImg} alt="visa logo"/> : <img src={masterCardImg} alt="mastercard logo"/>}
      <div className='card-details-box'>
        <h2>{dottedCardNrSpaces}</h2>
        <p>
          <span>
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span id='bank-name'>{bank}</span>
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
