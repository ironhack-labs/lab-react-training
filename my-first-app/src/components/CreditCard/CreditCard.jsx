
const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {

    const cardTypeClass = type === 'Visa' ? 'visa-card' : 'mastercard-card'

    const cardLastDigits = number.slice(-4)

    return (
        <div className={`credit-card ${cardTypeClass}`} style={{ backgroundColor: bgColor, color, }}>
            <div className="card-type">{type}</div>
            <div className="card-number">**** **** **** {cardLastDigits}</div>
            <div className="card-info">
                <span>{`Expires: ${expirationMonth}/${expirationYear}`}</span>
                <span>{bank}</span>
            </div>
            <div className="card-owner">{owner}</div>
        </div>
    )
}

export default CreditCard

