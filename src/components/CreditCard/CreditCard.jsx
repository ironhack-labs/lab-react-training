import './CreditCard.css'
import logoVisa from '../../assets/images/visa.png'


const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    const divStyle = {
        backgroundColor: bgColor,
        color: color
    };
    let hideNum = [];
    for (let i = 0; i < number.length; i++) {
        if (i < number.length - 4) {
            hideNum.push("*");
        } else {
            hideNum.push(number[i]);
        } if ((i + 1) % 4 === 0 && i !== 0) {
            hideNum.push(' ')
        }
    }
    let prueba
    if (type === 'Visa') {
        prueba = <img className='logoVisa' src={logoVisa} alt="logo" />
    } else {
        prueba = <p className='logoVisa'>{type}</p>
    }
    return (
        <div className='CreditCard' style={divStyle}>
            {prueba}
            <p className='cardNum'>{hideNum.join("")}</p>
            <div className='CardFlex'>
                <p>Expires: {expirationMonth}/{expirationYear}</p>
                <p className='cardBank' >{bank}</p>
            </div>
            <p className='cardOwner'>{owner}</p>
        </div>
    )
}
export default CreditCard