import React from 'react'


export default function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    
    let imgUrl = ''
    if (type === 'Visa'){
        imgUrl = '../img/visa.png'
    } else if (type === 'Master Card'){
        imgUrl = '../img/master-card.svg'
    }

    let lastFour = number.toString().slice(-4)
    let lastYear = expirationYear.toString().slice(-2)

    const styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    return(
        <div className="CreditCard" style={styles}>
            <div className="type">
                <img src={imgUrl} alt="Visa / Master Card"></img>
            </div>
            <strong>•••• •••• •••• {lastFour}</strong>
            <p>Expires: {expirationMonth}/{lastYear}    {bank}</p>
            <p>{owner}</p>
        </div>
    )
}