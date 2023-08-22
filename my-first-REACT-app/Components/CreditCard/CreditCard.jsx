import './CredtCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let imgSource = type === "Visa" ? "public/Visa_Logo.png" : "public/MasterCard_early_1990s_logo.png"

    const hiddenNumber = (number) => {
        let lastFourDigits = number.slice(-4)
        let maskedCardNumber = '*'.repeat(number.length - 4) + lastFourDigits
        return maskedCardNumber
    }
    let maskedNumber = hiddenNumber(number)

    const ExpiringDate = `Expires ${expirationMonth}/${expirationYear}`


    const coloredCard = {
        backgroundColor: bgColor,
        color: color
    }

    return (
        <div style={coloredCard}>

            <img src={imgSource} class="cardLogo" alt={type} />
            <p>{maskedNumber}</p>
            <p>{ExpiringDate}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard