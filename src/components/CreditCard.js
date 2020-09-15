import React from 'react'


function CreditCard(props) {

    const divStyle = {
        color: `${props.color}`,
        backgroundColor: `${props.bgColor}`,
    };

    
    return(
        < div className="CreditCard" style={divStyle}>
            <div className="type">
               <p>{props.type==="Visa" && <img src="/img/visa.png" className="Visa"  />}</p>
               <p>{props.type==="Master Card" && <img src="/img/master-card.svg" className="MasterCard" />}</p>
            </div>

            <div className = "numbers">
            •••• •••• •••• {props.number.substr(-4)} 
            </div>
            
            <div className = "expire">
                <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
                <p> {props.bank}</p>
            </div>
            
            <div className = "name">
            {props.owner}
            </div>
        </div>
    )
}

export default CreditCard