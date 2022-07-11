import './CreditCar.css'

const CreditCar = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const numberPrivate = number.slice(12, 16)
    console.log(numberPrivate)
    return (
        <article className="CreditCard" style={{ backgroundColor: bgColor }}>

            <h1 className="Number">**** **** ****{numberPrivate}</h1>
            <p className="ExpirationMonth"> Expires: {expirationMonth}/{expirationYear}</p>
            <p className="Bank">{bank}</p>
            <p className="Bank">{owner}</p>

        </article>
    )
}

export default CreditCar