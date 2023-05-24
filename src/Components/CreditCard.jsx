import React from 'react'

function CreditCard(props) {
const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

const cardStyle = {
    backgroundColor: bgColor,
    color: color,
    padding: '10px',
    borderRadius: '10px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: '10px',
    fontSize: '18px',
    borderRadius: '18px'
  };

const cardLogo = {
    width: '10px',
}

function typeOfCard(type) {
    if (type === 'Visa') {
        return <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png' alt='visa'/>
    }
    else if (type === 'Master Card') {
        return <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' alt='mastercard' />
    }
}

let lastFourDigits = number.slice(-4)


  return (
    <div style={cardStyle}>
        <div style={cardLogo}>
            {typeOfCard(type)}
        </div>
        
    
        <div style={{marginBottom: '10px'}}> 
            {lastFourDigits}
        </div>

        <div style={{marginBottom: '10px'}}>
            Expires {expirationMonth}/{expirationYear % 100}
        </div>

        <div style={{marginBottom: '10px'}}>
            {bank}
        </div>

        <div>
            {owner}
        </div>
    
    
    
    </div>

    
  )
}

export default CreditCard