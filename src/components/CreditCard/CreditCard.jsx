import React from 'react'

export default function CreditCard(props) {

    const logo = (type) => {
        if (type == "Visa") {
            return 'http://localhost:3006/img/visa.png'
        } else {
            return 'http://localhost:3006/img/master-card.svg'
        }
    }

    const divStyle = {
        width: '350px',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: `${props.bgColor}`,
        color: `${props.color}`
    };

    return (

            <div style={divStyle}>
                <div><img src={logo(props.type)} height="20" /></div>
                <div>
                    <h2>**** **** **** {props.number.slice(12)}</h2>
                    <p>Expires {props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                    <p>{props.owner}</p>
                </div>
            </div>

    )
}
