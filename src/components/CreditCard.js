import visa from '../assets/images/visa.png';
import mastercard from '../assets/images/master-card.svg';

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
  const formattedNumber = number
    .split('')
    .slice(number.length - 4)
    .join('');

  const styles = {
    card: {
      backgroundColor: bgColor,
      color: color,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: '1.8%',
      height: '150px',
      width: '300px',
      borderRadius: '20px',
      marginBottom: '20px',
      marginLeft: '20px',
    },
    logo: {
      alignSelf: 'flex-end',
    },
    img: {
      width: '50px',
    },
    number: {
      fontSize: '18px',
      alignSelf: 'center',
      fontWeight: '800',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.logo}>
        {type === 'Visa' ? (
          <img style={styles.img} alt="bank logo" src={visa} />
        ) : (
          <img style={styles.img} alt="bank logo" src={mastercard} />
        )}
      </div>
      <div style={styles.number}>**** **** **** {formattedNumber}</div>
      <div>
        Expires {expirationMonth}/{expirationYear} {bank} <br />
        {owner}
      </div>
    </div>
  );
};

export default CreditCard;
