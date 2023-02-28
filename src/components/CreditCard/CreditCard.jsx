import './../CreditCard/CreditCard.css'
import visa from './../../assets/images/visa.png'
import mc from './../../assets/images/mastercard.png'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {


    let img

    if (type === 'Visa') {
        img = visa
    }
    if (type === 'Master Card') {
        img = mc
    }


    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    return (

        <div className='CreditCard' style={divStyle}>

            <div>
                <img src={img} alt={type} />
            </div>
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>
    )
}

export default CreditCard