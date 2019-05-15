import React from 'react';



const CreditCard =(props)=>{
    let {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}= props;
    let Logo =(type) => type === 'Visa' ? './img/visa.png'
    :'./img/master-card.svg';

    let Cubre = (string) => (
        `•••• •••• •••• ${string.substring(string.length-4)}`)

    let logo = Logo(type);
    let Numberr = Cubre(number)
    return (

        <div className='CreditCard' style={{backgroundColor: bgColor}}>
        <div className ='tipo'>
        <img src = {logo} width = '33.48em' height = '20em'/>
        </div>
        <p className='number'>{Numberr}</p>
        <p>Expires: {expirationMonth}/{expirationYear}</p>
        <p> {bank} </p>
        </div>
    )


}

export default CreditCard;