const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    type === 'Visa' ? type = 'visa.png' : type = 'master-card.svg'

    return (
        <div className="CreditCard" style={{ color, backgroundColor: bgColor }}>
            <div className="type">
                <img src={type} />
            </div>
            <div className="number">•••• •••• •••• {number.slice(-4)}</div>
            <div className="expires-bank"><span>Expires {expirationMonth}/{expirationYear.toString().slice(2, 4)} </span><span className="bank">{bank}</span></div>
            <div className="owner">{owner}</div>
        </div >

    )
}

export default CreditCard