import '../5. Credit Card/CreditCard.css';

const CreditCardInfo = (props) => {
    const { type, number,expirationMonth,expirationYear,bank,owner, bgColor, color } = props

    return(
        <div
        className="CreditCard"
        style={{
          backgroundColor: bgColor,
          color,
        }}
      >
        <div className="logo">
        
          {type === 'Visa' && (
            <img className="Visa" src="/img/creditCards/Visa.png" />
          )}
          {type === 'Master Card' && (
            <img className="Master" src="/img/creditCards/master.png" />
          )} 
        </div>
        <div className="digits"> **** **** **** {""}
            {number.substr(-4)}
        </div>
        <div className="inlineCard">
        <span>Expires {expirationMonth}/{expirationYear.toString().substr(-2)} {" "} </span>
        <span>{bank}</span>
          
        </div>
        <div className="owner">
            {owner}
        </div>
      </div>
    )

}

export default CreditCardInfo