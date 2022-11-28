import './CreditCard.css'
import masterCard from '../../src/assets/images/master-card.png'
import visaCard from '../../src/assets/images/visa.png'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const endCard = number.slice(-4);
    const endMonth = `0${expirationMonth}`.slice(-2);
    const endYear = `${expirationYear}`.slice(-2);
    const logoCreditCard = type === 'Visa' ? visaCard : masterCard;

    return (
        <section class='inline-cards'>
            <div
                className="credit-card"
                style={{ backgroundColor: bgColor, color: color }}
            >
                <img src={logoCreditCard} />
                <div className="credit-card-number">
                    <p>•••• •••• •••• {endCard}</p>
                </div>
                <p> Expires {endMonth}/{endYear}<span className='bank'> {bank}</span></p>
                <p>{owner}</p>
            </div>
        </section>
    )
}

export default CreditCard