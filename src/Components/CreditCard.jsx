import '../Styles/CreditCard.css';

const cardTypes = {
  Visa: '/img/visa.png',
  'Master Card': '/img/master-card.svg',
};

function CreditCard(props) {
  return (
    <div
      className="creditCardWrapper"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      {/* here should be an image src={types[type]} */}
      <div className="creditCardType">
        <img style={{ width: '50px' }} src={cardTypes[props.type]} alt="logo" />
      </div>
      <div className="creditCardNumber">
        {props.number.slice(12, 16).padStart(16, '*')}
      </div>

      <div className="creditCardExpireWrapper">
        <div>
          Expires {props.expirationMonth}/{props.expirationYear}
        </div>

        <div className="creditCardBank">{props.bank}</div>
      </div>

      <div className="creditCardOwner">{props.owner}</div>
    </div>
  );
}

export default CreditCard;
