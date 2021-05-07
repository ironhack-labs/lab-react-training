import React from 'react'
import './CreditCard.css'

const CreditCard = (props)=>{
    const divColor = {
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    } 

    return(
        <div className="cards" style={divColor} >
            <div>
                { props.type === 'Visa' ? (<img className="logo" src={`/img/visa.png`} alt=""/>) : (<img className="logo" src={`/img/master-card.svg`} alt=""/>)}
            </div>
            <div>
                { props.number }
            </div>
            <div>
                Expires { props.expirationMonth }/{ props.expirationYear }
            </div>
            <div>
                { props.bank }
            </div>
            <div>
                { props.owner }
            </div>
        </div>
    )
}

export default CreditCard