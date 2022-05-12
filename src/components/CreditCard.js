const CreditCard = (props) => {
    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props

    let secretNum = number.substring(12, 16)

    let cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    return (
        <div>
            <div className="creditCard" style={cardStyle}>
                <div className="type">
                    <p>{type}</p>
                </div>
                <div className="secretNum">
                    <p>•••• •••• •••• {secretNum}</p>
                </div>
                <div>
                    <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
                    <p>{owner}</p>
                </div>
            </div>
        </div>
    )

}

export default CreditCard