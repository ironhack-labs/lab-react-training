const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    return (
        <>
            <div className="type">
                <img src="/visa.png" />
            </div>
            <div className="number">•••• •••• •••• {number.slice(-4)}</div>
            <div className="expires-bank"><span>Expires {expirationMonth}/{expirationYear.toString().slice(2, 4)} </span><span className="bank">{bank}</span></div>
            <div className="owner">{owner}</div>
        </>
    )
}

export default CreditCard