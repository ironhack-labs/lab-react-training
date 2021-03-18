import React from 'react'
import '../assets/css/CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {


  const getBrand = () => {
    if (type ==="Visa"){
      return <img className="brand__card__visa" src="../../img/visa.png"></img>
    }
    else{
      return <img className="brand__card__master" src="../../img/master-card.svg"></img>
    }
  }

  const getNumber = () => {
    let hideNumber = number.split("").map((num, i) => {
      if(color === "white" && i<12){
        return (i === 3 || i === 7 || i === 11) ? (<span class="dot space__dot white"></span>) : <span class="dot white"></span>
      }
      if(i<12){
        return (i === 3 || i === 7 || i === 11) ? (<span class="dot space__dot"></span>) : <span class="dot"></span>
      }
      else {
        return num
      }
    })
    return hideNumber
  }


   
  return (
    <div className="CreditCard" style = {{backgroundColor: bgColor, color: color}}>
      <div className="credit__container">
        <div className="header__card">
            {getBrand()}
        </div>
        <div className="body__card">
            <h1>{getNumber()}</h1>
        </div>
        <div className="footer__card">
          <h2>Expires {expirationMonth}/{expirationYear}    {bank}</h2>
          <h2>{owner}</h2>
        </div>
      </div>
    </div>
  )
}

export default CreditCard
