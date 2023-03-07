import './creditcard.css'
import visa from '../../../assets/images/visa.png';
import masterCard from '../../../assets/images/MasterCard_Logo.svg.webp';


const cardImg = {
    Visa: visa,
    'Master Card': masterCard
  }

const CreditCard = ({ type, number, expirationMonth, expirationYear,
    bank, owner, bgColor, color}) => {
        return (
            <div className='CreditCard' style ={{backgroundColor: bgColor, color}}>
                <div className='CreditCard-type'>
                    <img src={cardImg[type]} alt=''/>
                </div>

                <div>
                    **** **** **** {number.slice(-4)}
                </div>

                <div className="CreditCard-data">
                    <div>
                        Expires {expirationMonth}/{expirationYear}
                    </div>

                    <div>
                        {bank}
                    </div>
                    
                    <div>
                        {owner}
                    </div>
                </div>

                

            </div>
        )

}

export default CreditCard;