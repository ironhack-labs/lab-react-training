import React from 'react'

export default function CreditCard(props) {
   const cardCompany= () => {
    if(props.type==="Visa") {
     return "/img/visa.png"
    }else{
        return "/img/master-card.svg"
}

   } 

   const tokenNumber= () => {
       let lastFour= props.number.substring(12)
    return `•••• •••• •••• ${lastFour}`
   }

   const cardColor=  {
       backgroundColor: props.bgColor,
       color: props.color
   }

   const digitMode= () => {
       if(props.expirationMonth<10){
           return `0${props.expirationMonth}`
       }else{
           return props.expirationMonth
       }
   }



    return (
        <div className="card" style={cardColor}>
                <img src={cardCompany()}/>
            <div className="number">
                <h3>{tokenNumber()}</h3>
            </div>
            <div className="cardText">
                <p>Expires {digitMode()}/{props.expirationYear}  {props.bank}</p>
                <p>{props.owner}</p>
            </div>
        </div>
    )
}
