const CreditCard = ({type,number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
 
    return (
        <div>
            
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p></p>
        </div>
    )
}

export default CreditCard
