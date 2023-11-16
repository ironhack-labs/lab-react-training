function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    
    const hiddenNumber = number.replace(/\d(?=\d{4})/g, "•");

    return (
        <div className="CreditCard box" 
        style={{backgroundColor:bgColor}}>
              
        <p>
          <b>Type:</b> {type} <br/>
          <b>Number:</b> {hiddenNumber} <br/>
          <b>Expires: {expirationMonth}/{expirationYear}     {bank}</b> <br/>
          <b>{owner} </b>
          
        </p>
    
    
        </div>
          );
}

export default CreditCard;