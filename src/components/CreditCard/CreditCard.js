import '../CreditCard/CredtCard.css'

function CreditCard(props) {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const cardStyle = {
        width: 500,
        height: 300,
        background: `${bgColor}`,
        color: `${color}`
    }

    return (
        <div className="tarjetas" style={cardStyle}>
            <p>{type}</p>,
            <p>{number}</p>,
            <p>{expirationMonth} {expirationYear}</p>,
            <p>{bank}</p>,
            <p>{owner}</p>
            <hr />
        </div>
    )


}




export default CreditCard