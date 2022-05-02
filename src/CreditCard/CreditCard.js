import './CreditCard.css'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const background = {
        backgroundColor: `${bgColor}`,
        color: `${color}`

    };

    let secretNumber = number.substring(12, 16)

    return (
        <div className="creditCard" style={background}>

            <p>{owner}</p>
            <p>{bank}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{type}</p>
            <p>{secretNumber}</p>

        </div>

    )
}




export default CreditCard

