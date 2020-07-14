import React from 'react'

function divStyle(color, bgColor) {
    return{
            color: color, 
            background:  bgColor
        }
}


const CreditCard = props => {
    let source = './img/visa.png'
    if(props.type ==='Master Card'){
        source = './img/master-card.svg'
    }
    return (
        <div className='container-card' style={divStyle(props.color, props.bgColor)}>
            <div>
                <img className='ccard-img'src={source} alt={props.type}/>
            </div>
            <div className='ccard-number'>
                ···· 
                ···· 
                ···· 
                {props.number.slice(12)}
            </div>
            <div className='ccard-info'>
                <div>
                    Expires {props.expirationMonth}/{props.expirationYear}   {props.bank}
                </div>
                <div>
                    {props.owner}
                </div>
            </div>
        </div>
    )
}

export default CreditCard