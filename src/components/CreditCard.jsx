import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

function CreditCard(props) {
    const {type, number, expirationMonth, expirationYear, bank, bgColor, color } = props
  return (
    <div style={{backgroundColor: bgColor, color: color}}>
    <p>Type:{type}</p>
    <p>Number:{number}</p>
    <p>ExpireYear/Month:{expirationMonth} {expirationYear}</p>
    <p>Bank:{bank}</p>
    <p>BgColor:{bgColor}</p>
    <p>Color:{color}</p>
    </div>
  )
}

export default CreditCard


