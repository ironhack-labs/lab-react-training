import visa from '../assets/images/visa.png'
import mastercard from '../assets/images/master-card.svg'

import './CreditCard.css'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

    const stuff = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    } 

    if(type==="Visa"){
        return (
            <div className="card" style={stuff}>
            <div className="cardimage">
            <img src={visa} alt=""/>
            </div>
            <div>
                {number}
            </div>
            <div>
                <p>Expires {expirationMonth}/{expirationYear}     {bank} </p>
            </div>
            <div>
                <p>{owner}</p>
            </div>
            </div>
        )} else if (type==="Master Card") {
            return (
                <div className="card" style={stuff}>
                <div className="cardimage">
                <img src={mastercard} alt=""/>
                </div>
                <div>
                    {number}
                </div>
                <div className=''>
                <div>
                    <p>Expires {expirationMonth}/{expirationYear}     {bank} </p>
                </div>
                <div>
                    <p>{owner}</p>
                </div>
                </div>
                </div>
            )}
}

export default CreditCard