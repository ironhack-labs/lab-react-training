const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const secretNumber = `*********** ${number[12]}${number[13]}${number[14]}${number[15]}`
    const year = expirationYear.toString().slice(2)
    return (
        <div >
            <div style={{ backgroundColor: bgColor, color: color }}>
                <h3>{type}</h3>
                <p>{secretNumber}</p>
                <p>Expires: {expirationMonth}/{year} <small>{bank}</small></p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard