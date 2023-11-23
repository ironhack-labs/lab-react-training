
const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
}) => {
    const lastFourDigits = number.slice(-4)

    return (
        <div
            className="credit-card"
            style={{ backgroundColor: bgColor, color: color }}
        >
            <div className="type">
                {type === 'Visa' ? (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
                        alt="Visa"
                    />
                ) : (
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg"
                        alt="Mastercard"
                    />
                )}
            </div>
            <div className="number">•••• •••• •••• {lastFourDigits}</div>
            <div className="info">
                <p>Expires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard