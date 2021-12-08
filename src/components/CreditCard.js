import visa from './../assets/images/visa.png'
import masterCard from './../assets/images/master-card.svg'

const CreditCard = (props) => {

    let {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props
    let properties = {backgroundColor: `${bgColor}`, color: `${color}`, width: '350px', height: '200px' }

    return (
        <div className="creditCard" style= {properties}>
            <p> {type === "Visa" ? <img className="logo" src={visa} alt="visa"/> : <img className="logo" src={masterCard} alt="masterCard"/> } </p>
            <br />
            <br />
            <br />
            <p className="number">{number}</p>
            <br />
            <p>Expires {expirationMonth}/{expirationYear}       {bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard
