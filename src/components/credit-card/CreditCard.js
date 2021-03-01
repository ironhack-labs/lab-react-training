
function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const cardStyle = {
        width: `450px`,
        background: `${bgColor}`
    }
    let logo = ''
    switch (type) {
        case "Visa":
            logo = 'visa.png'
            break;
        case 'Master Card':
            logo = 'master-card.svg';
            break;
        default:
            logo = 'visa.png';
    }
   let cardNumber = "•••• •••• •••• " + number.slice(12, 16)
    return (
        <div className={`card mb-3`} style={cardStyle}>
            <div className="card-body">
                <div className="text-end mb-2"><img src={`/img/${logo}`} alt="credit card" width="50" /></div>
                <h1 style={{ color }} className="card-title text-center text-{color} pt-2">{cardNumber}</h1>
                <h6 style={{ color }} className="card-subtitle mb-2 text-{color} pt-3">Expires {expirationMonth}/{expirationYear} <span>{bank}</span></h6>
                <p style={{ color }} className="card-text">{owner}</p>

            </div>
        </div >
    )
}
export default CreditCard;