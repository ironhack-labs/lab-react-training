import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let url
    type === "visa" ? url = "src/assets/visa.png" : url = "src/assets/mastercardIcon.png"


    return (

        <div className='card' style={{ backgroundColor: bgColor, color: color }}>
            <div className="logo"><img src={url} alt={type} /></div>
            <p className='cardNumber'>**** **** **** {number.slice(12, 16)}</p>
            <span className='expirationDate'>
                Expires {expirationMonth < 10 ? expirationMonth = "0" + expirationMonth : expirationMonth}/{expirationYear % 100}
            </span>
            <span className='expirationDate'>{bank}</span>
            <p>{owner}</p>
        </div>

    )

}

export default CreditCard


