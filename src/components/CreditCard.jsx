
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    const maskedNumber = `•••• •••• •••• ${number.slice(-4)}`
   
    return (
    <div className="creditCard">
        <div className="number">
            <h3>{maskedNumber}</h3>
        </div>
        <div className="type">{type}</div>
        <div className="expiration">
            {`${expirationMonth}/${expirationYear} ${bank}`}
        </div>
        <div className="owner">
            {owner}
        </div>
    </div>
    )
}


export default CreditCard