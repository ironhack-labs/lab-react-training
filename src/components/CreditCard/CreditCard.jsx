import visa from "./../../assets/visa.png"
import Master from "./../../assets/master.png"
import './CredictCard.css'



const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const back = {
        backgroundColor: bgColor,
        color: color
    }

    let tarj
    if (type == 'Visa') {
        tarj = visa
    } else {
        tarj = Master
    }

    let mont
    if (expirationMonth < 10) {
        mont = '0' + expirationMonth
    }

    return (

        <div style={back}>
            <img src={tarj} alt="" />
            <h2>**** **** **** {number.slice(-4)}</h2>
            <p>Expires {mont}/{expirationYear.toString().slice(-2)}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    )
}


export default CreditCard
