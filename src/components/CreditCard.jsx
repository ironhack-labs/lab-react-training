const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    // const background: bgColor,
    // const color: color

    const CreditCardLogo = type === "Visa" ? './img/visa.png' : './img/mastercardIcon.png'
    const cardStyle = {
        backgroundColor: bgColor,
        color: color,
    }

    return (
        <>
            <div>
                <img src={CreditCardLogo} alt="logo" />
                <p>{type}</p>
                <p>{number}</p>
                <p>{expirationMonth}</p>
                <p>{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </div>
        </>
    )
}
export default CreditCard