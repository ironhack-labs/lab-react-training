import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let lastNumbers = number.slice(-4)

    return (
        <div className='credit-card' style={{ backgroundColor: bgColor }}>

            <p class='card-type' style={{ color: { color } }}>{type}</p>
            <p class='card-number' style={{ color: { color } }}>**** **** **** {lastNumbers}</p>
            <p class='card-info' style={{ color: { color } }}>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p class='card-info' style={{ color: { color } }}>{owner}</p>

        </div>
    )
}

export default CreditCard