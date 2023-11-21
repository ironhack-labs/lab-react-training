import './CreditCard.css'

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
}) => {

    let typeImage = 'src/assets/mastercardIcon.png'

    if (type === 'Visa') {
        typeImage = 'src/assets/visa.png'
    }

    number = number.slice(-4)
    const formatedNumber = '**** **** **** ' + number

    if (expirationMonth < 10) {
        expirationMonth = '0' + expirationMonth
    }

    expirationYear = expirationYear.toString().slice(-2)

    return (
        <div className="creditCard" style={{ color, backgroundColor: bgColor }}>
            <div className="type">
                <figure><img src={typeImage} alt={type} /></figure>
            </div>
            <div className='cardNumber mt-3'>
                <h3>{formatedNumber}</h3>
            </div>
            <div className=" row data mt-3">
                <div className="col-4">
                    <h4>Expires {expirationMonth}/{expirationYear}</h4>
                </div>
                <div className="col-8">
                    <h4>{bank}</h4>
                </div>
                <div className="col-6">
                    <h4>{owner}</h4>
                </div>
            </div>
        </div>

    )
}

export default CreditCard