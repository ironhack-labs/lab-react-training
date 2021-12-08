const CreditCard = (props) => {
      return (
        <div
          className="card"
          style={{
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`,
          }}
        >
          <div className="card-body">
            <div className="type">{props.type}</div>
            <div className="number">{props.number}</div>
            <div className="expirebank">
              <span className="bank">
                Expires {props.expirationMonth}/ {props.expirationYear}{' '}
                {props.bank}
              </span>
            </div>
            <div className="owner">{props.owner}</div>
          </div>
        </div>
      );
}

export default CreditCard
