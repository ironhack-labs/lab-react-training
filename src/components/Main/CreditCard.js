import icon1 from './../../assets/images/visa.png';
import icon2 from './../../assets/images/master-card.svg';

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
  const bgCreditCard = bgColor;
  let imageCreditCard;

  if (type === 'Visa') {
    imageCreditCard = icon1;
  } else {
    imageCreditCard = icon2;
  }
  //tomamos los ultimos 4 digitos
  const numberCard = number;
  const arrayNumber = numberCard.toString().split('');
  const digit = arrayNumber.slice(12, 16).join('').toString();

  //validando que sean 2 digitos o 1
  let expirationM;
  if (expirationMonth < 10) {
    expirationM = `0${expirationMonth}`;
  } else {
    expirationM = `${expirationMonth}`;
  }
  return (
    <div
      className="CreditCard"
      style={{ backgroundColor: `${bgCreditCard}`, color: `${color}` }}
    >
      <div className="type">
        <img src={imageCreditCard} alt="" />
        <div className="number">**** **** **** {digit}</div>
        <div className="expires-bank">
          <span className="bank">
            Expires {expirationM}/{expirationYear} {bank}
          </span>
        </div>
        <div className="owner">{owner}</div>
      </div>
    </div>
  );
};

export default CreditCard;
