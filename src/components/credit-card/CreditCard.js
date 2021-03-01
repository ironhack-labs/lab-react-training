import visa from '../../images/visa.png'
import master from '../../images/master-card.svg'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, className }) {
    const style = {
        backgroundColor: bgColor,
        color: color,
    }

    const logoCompany = () => {
        if (type === "Master Card") {
            return <img width="60" src={master} alt="logo" />
        } else {
            return <img width="60" src={visa} alt="logo" />
        }
    }
    
    const twoDigits = () => {
        if(expirationMonth<10){
            return `0${expirationMonth}`
        }else {
            return expirationMonth
        }
    }


    return (
        <div className="row">
            <div className="text-center  p-3 mt-2" style={style} >
                <div className="text-end me-2 align-right" >

                    <div>{logoCompany()}</div>

                </div>
                <div className="card-number fs-2">{number.replace(/.{1,12}/, '************')}</div>
                <div className="card-body fs-5">
                    <p className="card-number text-start mb-0">Expires {twoDigits()}/{expirationYear} {bank}</p>
                    <p className="card-info text-start">{owner}</p>
                </div>
            </div>
        </div>

    )

}


CreditCard.defaultProps = {
    type: 'Visa',

}

export default CreditCard

