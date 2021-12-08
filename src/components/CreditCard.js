const CreditCard = ({type,number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
   
    const cardColor ={
        background: `${bgColor}`
    }
    return (
        <div className='CreditCard' style={cardColor}>
            
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
