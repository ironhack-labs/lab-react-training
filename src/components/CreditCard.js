import masterCard from '../assets/images/master-card.svg'
import visa from '../assets/images/visa.png'

import '../style/CreditCard.css'

function CreditCard(props) {

    const {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props;


    let srcImage;
    if (type === "Visa") {
        srcImage = visa
    } else {
        srcImage = masterCard
    }

    const lastFourDigits = number.slice(-4,)


    function getExpirationDate(month, year) {

        let finalDate = '';
        let monthString;
        if (month < 9) {
            monthString = '0' + month.toString()
        } else {
            monthString = month.toString()
        }

        const yearStringFinalTwoDigits = year.toString().slice(-2,)

        finalDate += monthString + '/' + yearStringFinalTwoDigits

        return finalDate

    }





    return (
        <div className='CreditCard' style={{backgroundColor: bgColor}}>
            <img src={srcImage} alt={type}/>
            <main>
                <h1 style= {{color : color}}>•••• •••• •••• {lastFourDigits}</h1>
                <div className='DatesExpiration'>
                    <p>Expires {getExpirationDate(expirationMonth, expirationYear)}</p>
                    <p>{bank}</p>
                </div>
                <div>
                    <p className="Name">{owner}</p>
                </div>
            </main>
        </div >
    )
}

export default CreditCard;