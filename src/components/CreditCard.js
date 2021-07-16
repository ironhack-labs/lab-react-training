import React from 'react';

function CreditCard (props){



    return(
            <div className="card-div" style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>

                <div style={{margin:"10px"}}>

                    <p style={{textAlign:"right"}}>{props.type}</p>


                    <p>{props.number}</p>

                    <p>{props.expirationMonth} {props.expirationYear} {props.bank}</p>

                    {props.owner}
                
                </div>
            </div>
    )
}
export default CreditCard
