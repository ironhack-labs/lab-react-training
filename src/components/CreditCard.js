import React from 'react'

const CreditCard = (props) => {
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}= props;
    const estilos = {background: bgColor, color: color}

  return (
    <div className='moneyCard' style={estilos}>
        <div className='right'>
            <img width={45} src= {type === "Visa" ? "https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png"
                : "https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo.png"} alt="" 
            />

        </div>
        <div className='numberCard'><strong><p>**** **** **** {number.toString().slice(-4)}</p></strong></div>
        <div>
            <div className=' left infoCard'>
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p className='bankCard'>{bank}</p>
            </div>
            <p className='left'>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard;