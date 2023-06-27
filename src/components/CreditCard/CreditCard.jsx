import './CreditCard.css'

const CreditCard = ({ card }) => {
    const { type, number, expirationMonth, expirationYear, bank, bgColor, color, owner } = card
    let creditNum = number.toString().split("").slice(12, 16).join("")
    creditNum = "**** **** **** **** " + creditNum
    return (
        <div className="card-body" style={{ backgroundColor: bgColor, color: color }}>
            <h4>{type}</h4>
            <p>{creditNum}</p>
            <div style={{ display: 'flex' }}>
                <div>
                    <p>Expires {expirationMonth}/{expirationYear}<br />{owner}</p>

                </div>
                <p>{bank}</p>
            </div>
        </div>
    )
}

export default CreditCard