import React from 'react'

const CreditCard = (props) => {
    function typeOfCard(oneType) {
        if (oneType === "Visa") {
            return <img className="img-Card" src="/img/visa.png" alt="visaCard" />
        } else {
            return <img className="img-Card" src="/img/master-card.svg" alt="MCard" />
        }
    }
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            background: `${props.bgColor}`,
            color: `${props.color}`,
            padding: "50px",
            margin: "20px 50px",
            height: "200px",
            width: "400px",
            borderRadius: "20px"
        }}>

            <p style={{
                textAlign:"right",
            }}>
                {typeOfCard(props.type)}
            </p>
            <p style={{
                fontSize:"30px",
            }}>  •••• •••• ••••  {props.number.substr(12)}</p>
            <div style={{
                display: "flex",
            }}>
                {props.expirationMonth}/
                {props.expirationYear}
                &nbsp;&nbsp;&nbsp;{props.bank}
            </div>

           <p style={{
               textAlign:"left"
           }}>{props.owner}</p> 
        </div>
    )
}

export default CreditCard
