const CreditCard = ({type,number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
   
    const cardColor ={
        background: `${bgColor}`
    }
    let logoCard = ''
        switch(type){
            case 'Visa':
                logoCard = 'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/visa.png'
             break;
             case 'Master Card':
                logoCard = 'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg'
             break;
             default:
                logoCard = 'https://5c6c2a0de07b084ce35373ee--determined-aryabhata-a8a833.netlify.app/img/master-card.svg'
              break;
            }

    return (
        <div className='CreditCard' style={cardColor}>
            <img src={logoCard} width='150' alt={type}/>
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard
