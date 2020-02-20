import React from 'react'

const CreditCard = props => {
  
  const image = props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'
  const number = `●●●● ●●●● ●●●● ${props.number.split('').splice(12, 4).join('')}`

  /*
  En un principio tuve este approach, sin embargo no funciono y solo me daba dos x en vez
  de pasar el numero escondido con los ultimos cuatro digitos.
  const hideNumbers = 'xxxx xxxx xxxx'
  const hiddenNumber = hideNumbers.split('').splice(12,4).join('')
  console.log(hideNumbers)
  console.log(hiddenNumber)
  */
  
  return (
    <div className='cardInfo'>
      <img src={image} alt='card type' />
      <h6>{number}</h6>
      <div>
        <p>Expires: {props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
      </div>
      <p>{props.owner}</p>
    </div>
  )

} 



export default CreditCard
