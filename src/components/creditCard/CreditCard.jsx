import './creditCard.css'
import visa from '../../assets/images/visa.png'
// import mastercard from '../../assets/images/master-card.svg'

function creditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let img = ""
    switch (type) {
        case "Visa":
            img = visa
            console.log(type)
            break;
        // case "Master Card":
        //     img = mastercard
        //     console.log(type)
        //     break;
        default:
    }

    return (
        <div className="credit-card" style={{ backgroundColor: bgColor, color: color }}>
            <img src={img} alt="" />
            <p>************{number.slice(0, 4)}</p>
            <span>{expirationMonth}/{expirationYear}</span>
            <span>{bank}</span>
            <p>{owner}</p>
        </div>
    )
}

export default creditCard