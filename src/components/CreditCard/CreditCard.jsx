import visa from "../../assets/images/visa.png"
import mastercard from "../../assets/images/mastercardIcon.png"

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let privado = number.slice(12, 16)
    return (
        <section className="credicard" style={{ backgroundColor: bgColor, color: color }}>
            {type === 'Visa' && <img src={visa} alt="visa" />}
            {type === 'Master Card' && <img src={mastercard} alt="mastercard" />}
            <h6>.............{privado}</h6>
            <p>Expires {expirationMonth}/{expirationYear}<span>{bank}</span></p>
            <p>{owner}</p>
        </section>
    )
}

export default CreditCard