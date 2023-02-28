import React from 'react'

function CreditCard(props) {
    const {type, 
           number, 
           expirationMonth, 
           expirationYear, 
           bank, 
           owner, 
           bgColor, 
           color} = props

           const divStyle = {
            backgroundColor: bgColor,
            color: color,
          };

          const visaOrMaster = 
            type === "Visa" ? 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcR_FrTaaaGEk9eULQpb355SxtAFizG5jleBqp_1q8j2dgMxqfHT&psig=AOvVaw1N45ME5K7HkYaPAwnCt0Uo&ust=1677691461328000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCICR-e7duP0CFQAAAAAdAAAAABAD'   
            : 'https://1361832452.rsc.cdn77.org/gesa/files/2560px-MasterCard_Logo.svg__0.png?1626945992'

  return (
    <div className='credit'>
    <div className='creditCard' style={divStyle}>
    <img src={visaOrMaster} typeof={type} alt={type}/>
    <p>.... .... .... {number.slice(12)}</p>
    <p>Expires {expirationMonth}/{expirationYear}</p>
    <p>{bank}</p>
    <p>{owner}</p>
    </div>
    </div>
  )
}

export default CreditCard