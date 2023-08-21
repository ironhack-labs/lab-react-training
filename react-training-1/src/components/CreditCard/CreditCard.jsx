const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const imageCard = type === "Visa" ? "/visa.png" : "/mastercardIcon.png"

    const cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }
    return (
        <>
            <div style={cardStyle}>
                <img src={imageCard} alt="" />
                <p>**** **** **** {number.slice(-4)}</p>
                <p>Expires: {expirationMonth} {expirationYear}</p>
                <p>Name of the Bank: {bank}</p>
                <p>Owner: {owner}</p>
            </div >
        </>
    )
}

export default CreditCard