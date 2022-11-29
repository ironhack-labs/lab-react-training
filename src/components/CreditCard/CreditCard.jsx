import './CreditCard.css'
import MasterCard from '../../assets/images/master-card-converted.svg'
import Visa from '../../assets/images/visa.png'

const CreditCard = props => {


    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    // const numberHidden = number.split('').map((elm, i) => {
    //     if (i < number.length - 4) {
    //         return elm = '•'
    //     }
    //     return elm
    //  }) ================> Se intentó, a falta de añadir los espacios cada 4 digitos. 

    let month

    expirationMonth < 10 ? month = `0${expirationMonth.toString()}` : month = expirationMonth

    const divStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    let link

    if (type === 'Visa') {
        link = Visa
    } else {
        link = MasterCard
    }

    return (
        <div className='CreditCard' style={divStyle}>
            <div className='Type'>
                <img src={link} alt="" />
            </div>
            <p className='number'>{`•••• •••• •••• ${number.slice(12)}`}</p>
            <div className='ExpireAndBank'>
                <p>{`Expires ${month}/${expirationYear}`}</p>
                <p>{bank}
                </p>
            </div>
            <p>{owner}</p>


        </div>
    )
}

export default CreditCard
