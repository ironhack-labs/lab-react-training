import visa from '../assets/images/visa.png'
import './CreditCard.css'
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    let pasword = `${'*'.repeat(number.length - 4)}${number.substr(number.length - 4)}`
    return (<div style={divStyle} className="card">
        <img src={visa} alt={type} className="cardImg" />
        <h1>{pasword}</h1>
        <h3>expires:0{expirationMonth}/{expirationYear.toString().split('20')}    {bank}</h3>
        <p>{owner}</p>
    </div>
    )
}

export default CreditCard