import React from 'react'

import '../App.css'
import visa from '../assets/images/visa.png'
import mast from '../assets/images/master-card.svg'

export default function CreditCard(props) {

    let logo = mast ;
    if(props.type === "Visa") logo = visa;

  return (
    <div className='rectangle' 
    style={{backgroundColor: props.bgColor , color : props.color}}>
    <div><img src={logo} alt="" /></div>
    <div >
        <p className='serial'>•••• •••• •••• {props.number.slice(-4)}</p>
    </div>

    <div className='details'>
        <div>
            <p>Expires {props.expirationMonth}/{props.expirationYear}  &nbsp;&nbsp;&nbsp;&nbsp;  {props.bank}</p>
        </div>
        <div>
            <p>{props.owner}</p>
         </div>
    </div>

    </div>
  )
}