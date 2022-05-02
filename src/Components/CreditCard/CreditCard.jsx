import './CreditCard.css'

const CreditCard = ({type, number, expirationMonth,expirationYear,bank, owner,bgColor, color}) => {

    const background = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    };

    const numberCard = number.substring(12,16)

    return (
        <div className="creditcard" style={background}>
            <p>{type}</p>
            <p>{numberCard}</p>
            <p>{expirationMonth} / {expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}

export default CreditCard