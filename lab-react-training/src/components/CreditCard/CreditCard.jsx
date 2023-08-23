import './CreditCard.css'

const CreditCard = (CreditCard) => {


    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = CreditCard

    const hiddenNumber = (number) => {
        let lastFourDigits = number.slice(-4)
        let maskedCardNumber = '*'.repeat(number.length - 4) + lastFourDigits
        return maskedCardNumber
    }
    let maskedNumber = hiddenNumber(number)

    const colorT = {
        backgroundColor: bgColor,
        color: color
    }



    return (
        <div className='creditC' style={colorT}>
            <p>{type}</p>
            <p>{maskedNumber}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard