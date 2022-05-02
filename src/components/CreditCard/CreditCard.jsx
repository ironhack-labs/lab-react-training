import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {


    const cardNumber = `**** **** **** ${number.slice(-4)}`

    return (
        <div className="credit-card" style={{ backgroundColor: `${bgColor}` }}>
            <div className="credit-card-title" style={{ color: color }}>
                <div className='bank'>
                    <p>{type}</p>
                </div>
                <div className='card-number'>
                    <p>{cardNumber}</p>
                </div>
                <div className='info-card'>
                    <p>Expires {expirationMonth}/{expirationYear} <span>{bank}</span></p>
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    )
}

export default CreditCard