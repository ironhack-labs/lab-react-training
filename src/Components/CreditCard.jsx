import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        height: "200px",
        width: "350px",
        borderRadius: "15px",
        padding: "15px",
    }

    return (
        <div style={divStyle}>
            <div>{type}</div>
            <div>{number}</div>
            <div>{expirationMonth}/{expirationYear} {bank}</div>
            <div>{owner}</div>
        </div>
    )
}

export default CreditCard
