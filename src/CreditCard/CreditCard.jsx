import './CreditCard.css'
import VisaLogo from './../assets/images/visa.png'
import MCLogo from './../assets/images/master-card.svg'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let image
    let numberCard = "···· ···· ····" + number.slice(-4)

    if (type === 'Master Card') {
        image = MCLogo
    } else if (type === 'Visa') {
        image = VisaLogo
    }

    let expirationDate

    if (expirationMonth.length === '1') {
        expirationDate = `0${expirationMonth}/${expirationYear.toString().slice(-2)}`
    } else {
        expirationDate = `${expirationMonth}/${expirationYear.toString().slice(-2)}`
    }


    return (

        <div className='creditCard' style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>
            <div className="row logo">
                <div className="col-2"><img src={image} alt="" /></div>

            </div>
            <div className="row number">
                <div className="col"><p>{numberCard}</p></div>
            </div>
            <div className="row">
                <div className="col"> <p>Expires {expirationDate}</p>
                </div>
                <div className="col"><p>{bank}</p>
                </div>
                <div className="row">


                    <div className="col"><p>{owner}</p></div>
                </div>
            </div>
        </div>
    )
}

export default CreditCard





