import React from 'react'

function CreditCard(props) {
    const {type, number,expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    const hiddenNumber = '**** **** ****' + number.slice(-4);
    const formattedExpiration = `${expirationMonth.toString().padStart(2,'0')}/${expirationYear.toString().slice(-2)}`
 
  return (
    <div  style={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: '15px',
        padding: '20px',
        width: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}>
         <div style={{ alignSelf: 'flex-end', fontSize: '20px' }}> 
         <img
          src={type === 'Visa' ? 'visa.png' : 'master-card.png'}
          alt={type}
          style={{ height: '40px', width: 'auto' }}
        /></div>
        
      <div style={{ fontSize: '26px', marginTop: '20px' }}>{hiddenNumber}</div>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px', width: '100%' }}>
        <div>
          <p >Expires {formattedExpiration}</p>
          <p>{bank}</p>
        </div>
        
      </div>
      <div style={{ alignSelf: 'flex-start', marginTop: '20px' }}>{owner}</div>

    </div>
  )
}

export default CreditCard