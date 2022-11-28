const CreditCard = props => {


    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const cardStyle = {
        width: 500,
        height: 300,
        background: `${bgColor}`,
        color: `${color}`

    }
    return (
        <div className="creditCard" style={cardStyle}>
            <h1 className="type">{type}</h1>
            <p className="number">N: {number.slice(12)}</p>
            <p className="expiration">exp: {expirationMonth}/{expirationYear}</p>
            <p className="bank">{bank}</p>
            <p className="owner">{owner}</p>


        </div>
    )
}
export default CreditCard