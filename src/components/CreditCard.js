import React from 'react'


function CreditCard(props) {
    const divStyle = {
        background: `${props.bgColor}`,
        color: `${props.color}`
    }



    return (
        <div style={divStyle} className="credit-card">
            <div className="icono">
                {props.type === "Visa" ? <img src="/img/visa.png" className="imagen-icono" alt="visa" /> : <img src="/img/master-card.svg" className="imagen-icono" alt="master-card"/>}
            </div>
            <div>
            <p><strong>•••• •••• •••• {props.number.substring(12)}</strong></p>
            </div>
            <div>
                <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>
            </div>

        </div>
    )

}

export default CreditCard 