function CreditCard( {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const cardColors = {
      backgroundColor: `${bgColor}`,
      color: `${color}`
    };
    
      return (
        <div className="creditCard-container" style={cardColors}>
    
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