import './CreditCard.css'
import Visa from '../../assets/images/visa.png'
import Master from '../../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const divStyle = {
        color: color,
        backgroundColor: bgColor
    }
    // const hiddenNumber = (str) => {
    //     return str.slice(11, 15)
    // }

    // let bankImage
    // if (bankImage === 'Visa') {
    //     return Visa
    // }
    // if (bankImage === 'Master Card') {
    //     return Master
    // }

    const bankImage = type === 'Visa' ? Visa : Master

    return (
        <div className="card" style={divStyle}>
            <img src={bankImage} alt="img"></img>
            <h2>**********{number.slice(11, 15)}</h2>
            <p>Expires: {expirationMonth}/{expirationYear} {bank.toUpperCase()}</p>
            <p>{owner}</p>

        </div>

    )

}

// This iteration is not finished!

export default CreditCard