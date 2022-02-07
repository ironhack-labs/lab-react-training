import masterFoto from '../assets/images/master-card.svg'
import visaFoto from '../assets/images/visa.png'
import './CreditCard.css'

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, className }) {

    //    const colorStyle = {
    //         color: `${color}`,
    //         backgroundColor: `${bgColor}`
    //    } 

    let card;

    switch (type) {
        case 'Visa':
            card = visaFoto;
            break;
        case 'Master Card':
            default:
            card = masterFoto;
         
    }
        


    return (
        <div style={{backgroundColor: bgColor, color}} className={`credit-card w-100 d-flex flex-column rounded rounded-3 p-3 mt-4 ${className}`}>


            <img className="align-self-end mb-3" src={card} alt={type}></img>

            <h4 className='m-0 align-self-center my-1'>•••• •••• •••• {number.slice(-4)}</h4>
            <div className='d-flex credit-card-expires'>
                <small className='me-3'>Expires {expirationMonth} {'/'} {expirationYear}</small>
                <small>{bank}</small>
            </div>

            <small className=''>{owner}</small>
           
        </div>

    )
}


export default CreditCard