import visaImg from '../assets/images/visa.png';
//import masterImg from '../assets/images/master-card.svg'
const CreditCard = (props) => {
  const styleCreditCard = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    
      <div className="credit-card" style={styleCreditCard}>
        <div className="credit-car-header">
          {props.type === 'Visa' ? (
            <img src={visaImg} alt="" />
          ) : (
            <h3>MasterCard</h3>
          )}
        </div>
        <div className="number">
          <h2>{props.number}</h2>
        </div>

        <div className="expire-bank">
          <p>
            Expires{' '}
            {props.expirationMonth.toString().length === 1
              ? '0' + props.expirationMonth
              : +props.expirationMonth}{' '}
            /{' '}
            {props.expirationYear
              .toString()
              .substring(props.expirationYear.toString().length - 2)}
          </p>
          <p>{props.bank}</p>
        </div>
        <div className="owner">
          <p>{props.owner}</p>
        </div>
      </div>

  );
};

export default CreditCard;
