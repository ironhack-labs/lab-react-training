import visa from './../../assets/images/visa.png'
import masterCard from './../../assets/images/master-card.png'
import './CreditCard.css'

const CreditCard = props => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props

    // let bank2
    // type === "visa" ? bank2 = x : bank2 = y

    // Bank logo
    let bankLogo
    switch (type) {
        case 'Visa':
            bankLogo = visa
            break;

        case 'Master Card':
            bankLogo = masterCard
            break;
    }

    // Card number
    const secNumber = '**** **** **** ' + number.toString().slice(-4)


    // Card information
    const expirationDate = expirationMonth.toString().padStart(2, '0') + '/' + expirationYear.toString().slice(-2)

    const style = {
        color: color,
        backgroundColor: bgColor,
        borderRadius: '10px'
    }

    return (
        <div className="flex" style={style}>
            <div className="logo">
                <img src={bankLogo} alt="" />
            </div>
            <div className="cardNumber">
                <p>{secNumber}</p>
            </div>
            <div className="cardData">
                <p>{expirationDate}</p>
                <p>{bank}</p>
            </div>
            <div className="cardOwner">
                <p>{owner}</p>
            </div>
        </div>
    )

}

export default CreditCard