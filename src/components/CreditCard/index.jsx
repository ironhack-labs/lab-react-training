import Visa from '../../assets/images/visa.png'
import MasterCard from '../../assets/images/master-card.png'
import './index.css'


const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color})=>{
    let logo;
    if(type === "Visa"){
        logo = Visa
    } else if(type === "Master Card"){
        logo = MasterCard 
    }
    return(
        <div className='container'>
            <div style={{backgroundColor: bgColor}} className="creditCard">
                <div className="logo">
                    <img className="picture" src={logo} alt=''/>
                </div>
                <div className='cardNumber'>
                <p className='number'> **** **** **** {number.slice(-4)}</p>
                </div>
                <div className='info'>
                    <p className='date'>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <div className='name'>
                    {owner}
                </div>
            </div>
        </div>
    )
}

export default CreditCard