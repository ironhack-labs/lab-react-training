function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const creditCardColor = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
    }
    
    return (
        <div className="credit-card" style={creditCardColor}>

        <div>

          <p>{type}</p>
          <h2>{number}</h2>

        </div>

        <div>
          <span>{expirationMonth} / {expirationYear}</span> 
          <span>{bank}</span>
          <p>{owner}</p>
        </div>

        </div>
      )
    }
  
  export default CreditCard;