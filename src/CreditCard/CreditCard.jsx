import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let styles = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    let maskNumber = `${'*'.repeat(number.length - 4)}${number.substr(number.length - 4)}`

    return (
        <div className='creditCard' style={styles}>
            <p>{type.toUpperCase()}</p>
            <p>{maskNumber}</p>
            <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard 