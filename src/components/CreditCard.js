import React from 'react'

function CreditCard (props){
  let containerStyles = {
    backgroundColor: `${props.bgColor}`,
    borderRadius: '25px',
    color: `${props.color}`
    }
  let card= (props.type=== 'Visa')? './img/visa.png' : './img/master-card.svg'

  return (
    <article style={containerStyles}>
      <div><img src={card} alt='' width='50'/></div>
      <div>**** **** **** {props.number.toString().slice(12)}</div>
      <div>
        <p>Expires {props.expirationMonth}/{props.expirationYear.toString().slice(2)}  {props.bank}</p>
        <p>{props.owner}</p>
      </div>
    </article>
  )
  }
  



export default CreditCard