import classes from './CreditCard.module.css';

const CreditCard = (props) => {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const logoSrc =
    props.type === 'visa' ? '/img/visa.png' : '/img/mastercard.png';

  return (
    <div style={divStyle} className={classes.creditCard}>
      <img src={logoSrc} alt={props.type} className={classes.creditCardImg} />
      <p>
        &#8226;&#8226;&#8226;&#8226; &#8226;&#8226;&#8226;&#8226;
        &#8226;&#8226;&#8226;&#8226; {props.number.slice(-4)}
      </p>
      <p>
        {props.expirationMonth}/{props.expirationYear}
      </p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  );
};

export default CreditCard;
