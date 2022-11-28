const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    const divStyle = { background: `${bgColor}` }

    return (
        <div className="cards" style={divStyle} >
            <p>{type}</p>
            <p>●●●● ●●●● ●●●● {number.slice(12)}</p>
            <p>Expires:{expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>

        </div>
    )

}
export default CreditCard