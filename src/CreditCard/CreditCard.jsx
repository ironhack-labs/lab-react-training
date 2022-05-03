import './CreditCard.css'



const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let backgroundColor = `${bgColor}`

    return (
        <div className="CreditCard" style={{ backgroundColor, color }}>
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard