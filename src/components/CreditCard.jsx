import React from 'react'

function CreditCard(props) {
    console.log(props);

    const cardStyle = {
        color: props.color,
        background: props.bgColor,
        width: "200px",
        padding: "16px",
        border: "1px solid #cecece",
        borderRadius: "4px"
    }

    return (
        <div style={cardStyle}>
            <img style={{width: '20%', float: "right"}} src={props.type == "Visa" ? "/img/visa.png" : "/img/master-card.svg"} alt />
            <br />
            •••• •••• •••• {props.number.slice(12).toString()} 
            <br />
            Expires {props.expirationMonth}/{props.expirationYear}
            {"    |      "} {props.bank}
            <br />
            {props.owner}
        </div>
    )
}


export default CreditCard
