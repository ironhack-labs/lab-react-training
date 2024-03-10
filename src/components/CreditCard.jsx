import React from 'react'

function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    const cardType = (type) => {
        if (type === "Visa") {
            return '/visa.png'
        } else {
            console.log(type)
            return '/master-card.svg'
        }
    }

    const cardColor = {backgroundColor: `${bgColor}`, color: `${color}`}

    

  return (
    <div className='card-container' style={cardColor}>
       <div className='img-container'>
        <img src={cardType(type)} alt='logo'/>
       </div> 
       <div className='card-number'>
        ···· ···· ···· {number}
       </div>
       <div className='expiration-and-bank-container'>
        <p>Expires {expirationMonth}/{expirationYear}</p>
        <p>{bank}</p>
       </div>
       <p>{owner}</p>
    </div>
  )
}

export default CreditCard