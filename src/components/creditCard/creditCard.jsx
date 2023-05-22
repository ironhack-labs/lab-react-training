import "./creditCard.css"

const CreditCard = ({ ccInfo }) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = ccInfo
    const lastfourthNumber = number.slice(-4)

    let cardType
    if (type === 'Visa') {
        cardType = 'VISA'
    } else {
        cardType = 'MASTER CARD'
    }

    return (
        <div class="card-container" style={{ backgroundColor: bgColor, color: color }}>
            <div className="flex-container">

                <div>{cardType}</div>
            </div>
            <div className="secret-number">
                <span>{'•••• •••• •••• '}</span>
                <span>{lastfourthNumber}</span>
            </div>
            <div className="dates">
                <div>
                    <div className="expire">Expires {expirationMonth}/{expirationYear}   {bank}</div>
                    <div className="toUpper">{owner}</div>
                </div>
                <div style={{ textAlign: 'right' }}> </div>
            </div>
        </div>
    )
}

export default CreditCard