import React from 'react'

function CreditCard(props) {
    const {type, number, expirationYear, bank, owner, bgColor, color } = props;
  return (
    <div>
        <span className='type'>{props.type}</span>
        <span className='number'>{props.number}</span>
        <span className='expirationYear'>{props.expirationYear}</span>
        <span className='bank'>{props.bank}</span>
        <span className='owner'>{props.owner}</span>
        <span className='bgColor'>{props.bgColor}</span>
        <span className='color'>{props.color}</span>
    </div>
  )
}

export default CreditCard