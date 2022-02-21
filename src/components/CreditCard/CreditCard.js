import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    number = number.slice(-4)

    return(

        <div className="creditCard" style={{ backgroundColor: bgColor, color:color}}>
        <p>{type}</p>
        <p>{number}</p>
        <p>Expires {expirationMonth} {expirationYear}</p>    
        <p>{bank}</p>
        <p>{owner}</p>
        </div>
    )
}

export default CreditCard