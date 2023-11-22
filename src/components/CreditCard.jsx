import visa from '../assets/visa.png'
import mastercard from '../assets/master-card.png'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let image = ''
    let month = expirationMonth.toString()
    const year = expirationYear.toString()

    const styles = {
        backgroundColor: bgColor,
        color: color
    }

    if (type === 'Visa') {
        image = visa
    }
    else if (type === 'Master Card') {
        image = mastercard
    }

    if (month.length < 2) {
        month = '0' + month
    }

    return (
        <div style={styles}>
            <img src={image} alt={type} style={{ "width": "50px", "height": "40px" }} />
            <p>•••• •••• •••• {number.slice(12, 16)}</p>
            <p>Expires {month}/{year.slice(2, 4)}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}


export default CreditCard