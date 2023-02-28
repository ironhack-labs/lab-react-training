import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor,color} = props
    const divStyle = { backgroundColor: `${bgColor}`, color:`${color}`}
    function getType(log){
        if(log === 'Visa') return "https://companieslogo.com/img/orig/V.D-e36aebe0.png?t=1633206554"
        else if (log === 'Master Card') return "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"  
    }
    
  return (
    <div style={divStyle}>
        <img src={getType(type)} alt="logo" />
        <p>•••• •••• •••• {number.slice(-4)}</p>
        <p>Expires {expirationMonth}/{expirationYear}</p> <p>{bank}</p>
        <p>{owner}</p>
    </div>
  )
}

export default CreditCard







