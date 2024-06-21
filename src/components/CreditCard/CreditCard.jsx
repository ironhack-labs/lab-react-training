import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import Master from '../../assets/images/master-card.png'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let cardType
    if (type === 'Visa') {
        cardType = Visa
    }
    if (type === 'Master Card') {
        cardType = Master
    }

    return (
        <div className="credit-card" style={{ backgroundColor: `${bgColor}` }}>
            <article className='card-img'><img src={cardType} alt="" /></article>
            <article>
                <h3>{number}</h3>
                <p>{expirationMonth} {expirationYear} {bank}</p>
                <h5>{owner}</h5>
            </article>
        </div>
    )

}
export default CreditCard