import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import mastercard from '../../assets/images/mastercard.png'


const CreditCard = (creditCard) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = creditCard
    let card
    let numbers = number.slice(-4);
    if (type === "Visa") {
        card = visa
    }
    if (type === "Master Card") {
        card = mastercard
    }

    return (
        <div className="creditCard">
            <div className='card' style={{ background: bgColor, color: bgColor }} >
                <img src={card} alt="" />
            </div >
            <div className='number'>
                <p>************{numbers}</p>
            </div>
            <div className='expires'>
                <p>Expires {expirationMonth}/{expirationYear}</p> <p> {bank}</p>
            </div>
            <div className='owner'>
                <p>{owner}</p>
            </div>
        </div>
    )

}
export default CreditCard;