import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.png';

function CreditCard(props) {
  let {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  // get card type logo:
  let typeLogo = '';
  if (type === 'Visa') {
    typeLogo = <img style={{ height: 20, width: 50 }} src={Visa} alt=""></img>;
  }
  if (type === 'Master Card') {
    typeLogo = (
      <img style={{ height: 20, width: 35 }} src={MasterCard} alt=""></img>
    );
  }

  // format card number:
  const numLength = number.length;
  const lastFourDigits = number.slice(numLength - 4, numLength);
  const numToDisplay = `●●●● ●●●● ●●●● ${lastFourDigits}`;

  // format month:
  if (expirationMonth < 10) {
    expirationMonth = '0' + expirationMonth;
  }

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color,
        width: 300,
        height: 150,
        borderRadius: '10px',
        padding: '15px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ alignSelf: 'flex-end' }}>{typeLogo}</div>
      <div style={{ fontSize: '25px' }}>{numToDisplay}</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ display: 'flex', gap: '25px' }}>
          <div>
            Expires {expirationMonth}/{expirationYear}
          </div>
          <div>{bank}</div>
        </div>
        <div>{owner}</div>
      </div>
    </div>
  );
}

export default CreditCard;
