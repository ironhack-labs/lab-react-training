import React from 'react'

function CreditCard(props) {
    const{type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const securedNumber = number.slice(0, 4);
  return (
    <div className="credit-card" style={{backgroundColor : bgColor, color:color}}>
        <img className="card-type-img" src={type} alt="" />
        <h2>•••• •••• •••• {securedNumber}</h2>
        <div className="credit-card-expire">
        {expirationMonth < 10 ? <p>Expires 0{expirationMonth}/{expirationYear}</p> : <p>Expires {expirationMonth}/{expirationYear}</p>}
        <h6>{bank}</h6>
        </div>
        
        <h6>{owner}</h6>
    </div>
  )
}

export default CreditCard