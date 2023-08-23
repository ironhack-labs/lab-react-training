const creditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let logo = type === "Visa" ? "./src/assets/visa.png" : "./src/assets/mastercardIcon.png"

    let cardStyle = {
        backgroundColor: bgColor,
        color: color,
    }

    return (
        <div className="creditCard" style={cardStyle}>

            <p>{logo}</p>
            <p>Number:{number}</p>
            <p>Expiration Month: {expirationMonth}</p>
            <p>Expiration Year:{expirationYear}</p>
            <p>Bank: {bank}</p>
            <p>Owner: {owner}</p>
        </div>
    )
}
export default creditCard


