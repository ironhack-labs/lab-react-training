import visa from './visa.png'
import master from './master.png'
import './CreditCard.css'

const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props
    const theCard = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`

    let typeCard = tp => {
        switch (tp) {
            case 'Visa':
                return visa
            default:
                return master
        }

    }
    const cardStyle = {
        backgroundColor: bgColor,
        color: color
    }
    return (

        <section className="CreditCard" style={cardStyle}>
            <h3>{type}</h3>
            <p>{theCard}</p>
            <p>{expirationMonth}/{expirationYear} {bank}</p>
            <p>{owner}</p>
            <img src={typeCard(type)} alt="Card" />
        </section>

    )

}

export default CreditCard