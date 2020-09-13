import React from 'react'; 

function CreditCard(props) {

    let styling = {
        backgroundColor: `${props.bgColor}`,
        color:`${props.color}`
    }

    return (
      
            <div className="content" style={styling}> 
                <div className= "type">
                    <p>{props.type==="Visa" && <img src="/img/visa.png" alt="" height="8" width="20" />}</p>
                    <p>{props.type==="Master Card" && <img src="/img/master-card.svg" alt="" height="10" width="20" />}</p>

                </div>

                <div className="number">
                    <p>•••• •••• •••• {props.number.substr(-4)}</p>
                </div>

                <div clasName="bank-information">
                    <p>{props.expirationMonth}</p>
                    <p>{props.expirationYear}</p>
                    <p>{props.bank}</p>
                </div>

                <div className="owner">
                    <p>{props.owner}</p>
                </div>
            </div>
        
    )
}  

export default CreditCard;