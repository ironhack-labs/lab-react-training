import React from 'react'

const CreditCard = (props) => {    
    const lastChar = props.number.substr(props.number.length - 4);
  return (
    <div className='creditCards'>
        <div className='creditCard' style={{backgroundColor: props.bgColor}}>
            <h3 className='type'>{props.type}</h3>
            <div className='cardNumber'>
                <div className='setOfDots'>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                </div>
                <div className='setOfDots'>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                </div>
                <div className='setOfDots'>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                    <div className='dot' style={{backgroundColor: props.color}}></div>
                </div>
                <div className='lastDigits' style={{color: props.color}}>{lastChar}</div>

            </div>
            <div className='moreInfo' style={{color: props.color}}>
                <div className='info'>
                    <div>Expires {props.expirationMonth}/{props.expirationYear}</div>
                    <div className='bank'>{props.bank}</div>
                </div>
                <div className='owner'>{props.owner}</div>
            </div>
        </div>
    </div>
  )
}

export default CreditCard