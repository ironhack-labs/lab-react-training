import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const textCardColor = type == "Visa" ? "white" : "black"
    const numberCard = `**** **** **** ${number.substr(11, 4)}`
    const cardColor = { backgroundColor: `${bgColor}`, color: `${textCardColor}` }


    return (

        <div className='card' style={cardColor}>
            <div className="cardType">{type}</div>
            <div className="cardNumber">{numberCard}</div>
            <div className="cardName">
                <p>Exprires: {expirationMonth}/{expirationYear}               {bank}</p>
                <p>{owner}</p>
            </div>
        </div>

    )

}

export default CreditCard
