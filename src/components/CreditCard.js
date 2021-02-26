import React from 'react'

export default function CreditCard(props) {
function security (number) {
  const numero = number
  numero.split('').slice(11, 15)

}
const  monthNum = (expirationMonth) => {
  if (expirationMonth < 10) {
    return `0${expirationMonth}`
  } else {
    return expirationMonth
  }
};

  return (
    <div style={{backgroundColor: `${props.bgColor}`, color:`${props.color}` }}>
      <img width='50px' src={props.type==='Visa' ? '../img/visa.png': '../img/master-card.svg'}/>
      <p>************{security(props.number)}</p>
      <p>{monthNum(props.expirationMonth)}/{props.expirationYear}</p>
      <p>{props.bank}</p>
      <p>{props.owner}</p>
    </div>
  )
}
