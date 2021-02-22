import React from 'react'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const getType = (type) => {
        return type.toLowerCase() === 'visa' ? 'visa.png' : 'master-card.svg';
    }
    return (

            <div style={{backgroundColor: bgColor, border: '1px solid black', width:'25vw', height:'15vw', color }} >
                <img style={{width: '5vw'}} src={`/img/${getType(type)}`} />
                {/* <img style={{width: "1vw"}} src={`/img/${getType(type)}`} /> */}
                <p>**** **** **** {number.slice(12)}</p>
                <br/>
                <p>Expires {expirationMonth}/{expirationYear}    <span>{bank}</span></p>
                <p>{owner}</p>
            </div>

    )
}

export default CreditCard
