import './CreditCard.css'
import visa from './../../assets/visa.png'
import mastercard from './../../assets/mastercardIcon.png'



const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const back = {
        backgroundColor: bgColor,
        color: color
    }
    let imagen
    if(type==='Visa'){
        imagen=visa
    }
    else if(type==='Master Card'){
        imagen=mastercard
    }
    
    return(
        <div style={back}>
            <img src={imagen} alt="" />
            <p>****************{number.slice(12,16)}</p>
            <p>Expires {expirationMonth}/{expirationYear.toString().slice(2,4)}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>

    )

}

export default CreditCard
