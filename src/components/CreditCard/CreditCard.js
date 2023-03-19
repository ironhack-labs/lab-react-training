import React from 'react'

function CreditCard({ cardData }) {  

  const creditStyles = {
    backgroundColor: `${cardData.bgColor}`,
    color: `${cardData.color}`   
  }

  let cardLogo = ""
  if (cardData.type === "Visa") {
    cardLogo = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
  } else {
    cardLogo = "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
  }

  return (    
      <div style={creditStyles} className='card mt-4 col-4 d-flex felx-column p-3'>
        <div className='d-flex justify-content-end'>
          <img className='cardLogo' src={cardLogo} alt="" />
        </div>
        <div className='cardNumber mt-2'>
          <p>•••• •••• •••• {cardData.number.slice(-4)}</p>
        </div>
        <div className='d-flex flex-column align-items-start m-0'>
          <p className='m-0'>Expires {cardData.expirationMonth}/{cardData.expirationYear} &nbsp; {cardData.bank} </p>
          <p className='m-0'>{cardData.owner}</p>
        </div>      
      </div>    
  )
}

export default CreditCard