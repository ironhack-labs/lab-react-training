import './CreditCard.css'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const divStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`
    }

    let image = ""

    if (type === 'Visa') image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png'
    if (type === 'Master Card') image = 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-7.png'

    if (expirationMonth < 10) expirationMonth = `0${expirationMonth}`


    return (

        <div className='credit-card' style={divStyle}>
            <img src={image} alt="" />
            <h3>•••• •••• •••• {number.slice(12, 16)}</h3>
            <p>Expires {expirationMonth}/{expirationYear} <span>{bank}</span>
            </p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard