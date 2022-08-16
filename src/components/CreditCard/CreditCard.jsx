function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    
     /* let visaCard () {
        if(type === 'Visa') {
            <img src='../../assets/images/visa.png'/>
          } else {
            <img src='../../assets/images/master-card.svg'/>
           }
     }
     */
      return (
        <div>
         <div style={{backgroundColor:`${bgColor}`, color:`${color}`}}>
    
    
          <p>{number}</p>  
          <p>Expires {expirationMonth}/{expirationYear}  {bank} </p>  
          <p>{owner}</p>  
         </div>  
        </div>
      )
    }
    
    export default CreditCard