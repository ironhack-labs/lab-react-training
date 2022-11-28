import './CreditCard.css'
import masterCard from '../../assets/images/master-card.png'
import visaCard from '../../assets/images/visa.png'

const CreditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const lastigits = number.slice(-4);
    const monthigits = `0${expirationMonth}`.slice(-2);
    const yearLastigits = `${expirationYear}`.slice(-2);
    const creditCardTypeLogo = type === 'Visa' ? visaCard : masterCard;
    return (
        <div className='inline'>
            <div
                className="credit-card"
                style={{ backgroundColor: bgColor, color: color }}
            >
                <img src={creditCardTypeLogo} />
                <div className="credit-card-number">
                    <p>•••• •••• •••• {lastigits}</p>
                </div>
                <p> Expires {monthigits}/{yearLastigits}<span className='bankito'> {bank}</span></p>
                <p>{owner}</p>
            </div>
        </div>
    )
}
export default CreditCard