function CreditCard(props) {
  const cardStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };

  const cardType = {
    'Visa': 'img/visa.png',
    'Master Card': '/img/master-card.svg',
  };
  
  return (
    <div className="row g-2">
      <div className="col-4">
        <div className="card mb-3" style={cardStyle}>
          <div className="card-body">
            <img
              src={cardType[props.type]}
              className="cardType"
              alt="Card type"
            />
            <h5 className="card-title m-3">
              ···· ···· ···· {props.number.slice(-4)}
            </h5>
            <div className="row">
              <p className="card-text col-6">
              Expires{' '}
              {props.expirationMonth > 9
                ? props.expirationMonth
                : `0${props.expirationMonth}`}
              /{props.expirationYear.toString().slice(-2)}
            </p>
            <p className="col-6">{props.bank}</p>
            </div>
            
            <p>{props.owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard