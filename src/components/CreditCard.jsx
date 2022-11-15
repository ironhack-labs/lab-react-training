import React from 'react'

function CreditCard(props) {
    let { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    const last4Str = number.slice(-4);
    return (
        <div className='creditcard'>

            <div className='bgCard' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>

                <img src="/images/visa.png" alt="" />
                <div><p>{type}</p></div>
                <div><p>************{last4Str}</p></div>
                <div><p>{expirationMonth}</p></div>
                <div><p>{expirationYear}</p></div>
                <div><p>{bank}</p></div>
                <div><p>{owner}</p></div>
            </div>

        </div>
    )
}

export default CreditCard