import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    number = number.replace(/.(?=.{4})/g, "*")

    if (expirationMonth < 10) {
        expirationMonth = `0${expirationMonth}`
    }
    return (
        <div style={divStyle}>
            <figure>{type}</figure>
            <p>{number}</p>
            <p>{expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard