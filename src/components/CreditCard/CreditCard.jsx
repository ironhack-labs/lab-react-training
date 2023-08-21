import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const cardStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`

    }
    let logo = null
    if (type === 'Visa') {
        logo = <img src="src\assets\visa.png" alt="Visa Logo" />
    } else if (type === "Master Card") {
        logo = <img src="src\assets\mastercardIcon.png" alt="MasterCard Logo" />
    }

    return (
        <div className='creditcard'>
            <article className='card' style={cardStyle}>
                {logo}
                <p>************{number[12]}{number[13]}{number[14]}{number[15]}</p>
                <p>Espires {expirationMonth}/{expirationYear}</p>
                <p>{bank}</p>
                <p>{owner}</p>
            </article>
        </div>
    )
}

export default CreditCard