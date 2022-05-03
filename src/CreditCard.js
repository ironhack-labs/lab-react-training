const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: 300,
        height: 200
    }

    let lastFourDigits = `${number}`.substr(-4);
    return (


        <div style={cardStyle}>
            <p>{type}</p>
            <p>···· ···· ···· {lastFourDigits}</p>
            <p>Expires: {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard

