import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.svg';

// we can do destructuring like const {type,number,expirationmonth and so on, so that we dont have to use props.type and so on everytime}
const CreditCard = (props) => {
  const divStyle = {
    // background-image: url('../images/landing.jpg');
    display: 'flex',

    backgroundColor: `${props.bgColor}`,
    width: '400px',
    height: '300px',
    color: `${props.color}`,
    padding: '1rem',
  };

  const cards = {
    width: 'auto',
    height: '20px',
  };
  const secondDiv = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const circles = {
    height: '5px',
    width: '5px ',
    borderRadius: '50%',
    backgroundColor: `${props.color}`,
    alignItems: 'center',
    margin: '1rem 0',
  };
  const flexIt = {
    display: 'flex',
    justifyContent: 'flex-end',
  };
  // our if statements can go like this as well

  // let cardLogo;

  // if(type==='Visa'){
  //   cardLogo = Visa
  // }
  // else{
  //   cardLogo = masterCard;
  // }

  //  last four can also be number.substring(number.length-4);

  let lastFourCardDigits = props.number.slice(-4);

  return (
    <div style={divStyle}>
      <div style={flexIt}>
        <img
          src={props.type === 'Visa' ? Visa : MasterCard}
          alt="visaCard"
          style={cards}
        />
      </div>
      <div style={circles}></div>
      <div style={circles}></div>
      <div style={circles}></div>
      <div style={circles}></div>
      <div style={circles}></div>
      <div style={circles}></div>
      <div>{lastFourCardDigits}</div>

      <div style={secondDiv}>
        <p>{props.number}</p>

        <div>
          <p>
            Expires {props.expirationMonth}/{props.expirationYear}
            <span>{props.bank}</span>
          </p>

          <p>{props.owner}</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
