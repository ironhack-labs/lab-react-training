import "./CreditCardNumber.css"


function CreditCardNumber({ number }) {
    const cardLength = number.length
    function parseNumber(number) {
        const lastFour = number.slice(cardLength - 4)
        const cardParsed = `${'*'.repeat(number.length - 4)} ${lastFour}`
        return cardParsed
    }
    const cardParsed = parseNumber(number)
    return <p className="CreditCardNumber">{cardParsed}</p>
}

export default CreditCardNumber;