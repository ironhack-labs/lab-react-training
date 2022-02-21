import './CreditCard.css'
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {  

    return(
        <article className='creditCard' style={{
            backgroundColor: `${bgColor}`}}>
            <div className='typeCard'>
             {type}
            </div>
            <div className='cardNumber'>
                {number}
            </div>
            <div className='expBank'>
                <span className='expDate'>{expirationMonth}/{expirationYear}</span>
                {bank}
            </div>
            <div>
             {owner}
            </div>
        </article>

    )
    
}

export default CreditCard
