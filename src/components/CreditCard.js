import visa from '../assets/images/visa.png';
import MasterIcon from './MasterIcon';

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
  return (
    <article style={{ backgroundColor: bgColor, color }}>
      {type === 'Visa' ? (
        <img src={visa} alt="" />
      ) : type === 'Master Card' ? (
        <MasterIcon />
      ) : (
        <></>
      )}

      <div>{type}</div>
      <div>
        {'**** '.repeat(3)} {number.substr(number.length - 4)}
      </div>
      <div>
        <div>
          Expires: {expirationMonth}/{expirationYear}
        </div>
        <div>{bank}</div>
      </div>
      <div>{owner}</div>
    </article>
  );
}

export default CreditCard;
