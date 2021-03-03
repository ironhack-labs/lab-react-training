import visa from '../../images/visa.png'
import master from '../../images/master-card.svg'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const style = {
        backgroundColor: bgColor,
        color: color,
        width: '45'

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
        <div className=" mb-3 "style={{ width: 450 }} >
            <div className="text-center p-1 rounded "  style={style} >
                <div className="text-end me-2 align-right"  >

                    <div className="mb-5 mt-3 me-2">{logoCompany()}</div>

                </div>
                <div className="card-number mb-4 fs-3">{number.replace(/.{1,12}/, '**** **** **** ')}</div>
                <div className="card-body ms-0 fs-6">
                    <p className="card-number text-start mb-0">Expires {twoDigits()}/{expirationYear} <span> {bank} </span></p>
                    <p className="card-info text-start mb-0">{owner}</p>
                </div>
            </div>
        </div>

    )

}


CreditCard.defaultProps = {
    type: 'Visa',

}

export default CreditCard

