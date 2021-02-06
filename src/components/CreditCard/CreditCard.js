import React from 'react'; 

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const style = {
        backgroundColor: bgColor, 
        color: color, 
    }

    let slicedCard = number.slice(12)
    let symb = "⚫"
    let encNum = symb.repeat(12) + slicedCard

    return (
        <div style={style}>
            <p>{type}</p>
            <p>{encNum}</p>
            <p>{expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard;