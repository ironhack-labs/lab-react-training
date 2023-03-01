import './../CreditCard/CreditCard.css'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const cardStyle = {
        backgroundColor: `${bgColor}`,
    }

    const textColor = {
        color: `${color}`
    }

    const lastFour = number.substring(number.length - 4, number.length)


    return (

        <div className="CreditCard" style={cardStyle}>
            <div className="TopCard" style={textColor}>
                <p>{type}</p>

            </div>
            <div className="CardNumber" style={textColor}>
                <p>●●●● ●●●● ●●●● {lastFour}</p>

            </div>
            <div className="BottomCard" style={textColor}>
                <ul>
                    <li>Expires {expirationMonth}/{expirationYear}     {bank}</li>
                    <li>{owner}</li>
                </ul>


            </div>
        </div>

    )

}

export default CreditCard