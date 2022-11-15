import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    let logoSrc;
    let logoAlt;

    if (type === "Visa") {
        logoSrc = "/src/assets/images/visa.png"
        logoAlt = "Visa Logo"
        
    } else {
        logoSrc = "/src/assets/images/master-card.svg"
        logoAlt = "Master Card Logo"
    }

    const divStyle = {
        color: color,
        backgroundColor: bgColor,
    };

  return (
    <div className='border-line ' style={divStyle}>
        <div>
            <img src={logoSrc} alt={logoAlt} />
            <h3 className='text-align-right'>{type}</h3>
        </div>
        <h1>**** **** **** {number.slice(-4)}</h1>
        <div className='display-flex'>
            <div>
                <p><span className='bold-text'>Expires {expirationMonth}/{expirationYear}</span></p>
            </div>
            <div className='text-align-center'>
                <p>---------------{bank}</p>
            </div>
        </div>
        <div className='text-align-left'>
            <p>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard