function CreditCard(props) {

    const { type, expirationMonth, expirationYear, bank, owner, bgColor, number } = props

    const divStyle = {

        height: 250,
        width: 250,
        background: `${bgColor}`

    }

    return <div style={divStyle}>
        <p>{type}</p>
        <p>{expirationMonth}/{expirationYear}   {bank}</p>
        <p>{owner}</p>
        <p>•••• •••• ••••{number.slice(12)}</p>
    </div>

}

export default CreditCard