function CreditCard(props) {

  const {
    bgColor,
    color,
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
  } = props;
  
    const cardStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
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
              src={cardType[type]}
              className="cardType"
              alt="Card type"
            />
            <h5 className="card-title m-3">
              ···· ···· ···· {number.slice(-4)}
            </h5>
            <div className="row">
              <p className="card-text col-6">
              Expires{' '}
              {expirationMonth > 9
                ? expirationMonth
                : `0${expirationMonth}`}
              /{expirationYear.toString().slice(-2)}
            </p>
            <p className="col-6">{bank}</p>
            </div>
            
            <p>{owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreditCard