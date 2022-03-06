import visa from '../assets/images/visa.png';
import master from '../assets/images/master-card.svg';

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

  const last4Numbers = number.slice(number.length - 4, number.length);
  const logoCartao = type === 'Visa' ? visa : master;
  const zerinho =
    expirationMonth.length === 1 ? '0' + expirationMonth : expirationMonth;
  const ano = expirationYear
    .toString()
    .slice(expirationYear.length - 2, expirationYear.length);
  //if(type === 'Visa') {
  //    return 'Visa'
  //} else {
  //    return 'master card'
  // }
  const cartaoStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  return (
    <div className="card" style={cartaoStyle}>
      <div className="card-logo">
        <img src={logoCartao} alt="Logo do cartão" />
      </div>
      <div className="card-number">
        <span>.... .... .... </span> &nbsp; {` ` + last4Numbers}
      </div>
      <div className="card-info">
        <span>
          {zerinho}/{ano} {bank}
        </span>
        <span>{owner}</span>
      </div>
    </div>
  );
}

export default CreditCard;
