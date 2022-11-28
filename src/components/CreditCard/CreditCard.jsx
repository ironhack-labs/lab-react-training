


const CreditCard = props => {

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

    console.log(props)


    return (
        <div style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <p>{type}</p>
            <p>···· ···· ···· {number.slice(12)}</p>
            <p>Expires {expirationMonth}/{expirationYear.toString().slice(2)}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard