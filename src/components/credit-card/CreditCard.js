
function CreditCard(props) {
    const cardType = {
        'Visa' : '/img/visa.png',
        'Master Card': '/img/master-card.svg'
   
    }

    return(
        
        <div className="CreditCard" style={{backgroundColor:`${props.bgColor}`, color:`${props.color}`}}>
             <div className="BankLogo"><img src={cardType[props.type]}/></div>  
             <h3>···· ···· ···· {props.number.slice(-4)}</h3>
             <div className="CardDetails">
                <h5>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(-2)}</h5>
                <h5>{props.bank}</h5>
             </div>
             <h5>{props.owner}</h5>

        </div>


    )
}

export default CreditCard