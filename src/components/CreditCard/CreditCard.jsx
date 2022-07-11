import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const backgroundColor = {
        background: `${bgColor}`,
        color: `${color}`
    }

    if (expirationMonth < 10) {
        expirationMonth = `0${expirationMonth}`
    }

    (type === "Visa") ? true : false
    const hideNumber = number.slice(-4)

    return (

        <div className='Credit-card' style={backgroundColor}>
            <figure>{type}</figure>
            <p>********{hideNumber}</p>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard