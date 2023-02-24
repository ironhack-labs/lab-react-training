import React from 'react'

export const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

  let imgSrc = "";
    let width = 0;

    switch(type){
        case "Visa":
            imgSrc = "../assets/images/visa.png";
            width = 70;
            break;
        case "Master Card":
            imgSrc = "/mastercard-logo.png";
            width = 40;
            break;
        default:
            break;
    }

  return (

    <div className='CreditCard' style={{backgroundColor: bgColor, color: color}}>
       <img src={imgSrc} alt="card-logo" width={width}/>
            <h1>···· ···· ···· {number.slice(-4)}</h1>
            <p>
                <span>Expires {String(expirationMonth).padStart(2, '0')}{"/"}{expirationYear.toString().slice(-2)}  {bank}</span>
                <span>{owner}</span>
            </p>
    </div>
  )
}
