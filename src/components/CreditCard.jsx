import React from 'react'

function CreditCard(props) {
  return (
    <div>
<p className='type'> {props.type}</p>
<p className='number'>{props.number}</p>
<p className='fecha'>Expires {props.expirationMonth}/{props.expirationYear}</p>
<p className='nombre'>{props.owner}</p>
    </div>
  )
}

export default CreditCard