import './CreditCard.css'
import visa from '../../assets/images/visa.png'
import master from '../../assets/images/master-card.svg'

const CreditCard = ({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color }) => {

    
    let img =''
    if (type ==='Visa'){
        img = visa
    }

    if (type === 'Master Card'){
        img = master
    }

        const divStyle = {
            backgroundColor: `${bgColor}`,
            color:`${color}`
        }

    return (
        <div className='cards' style={divStyle} >
            <img src={img} alt="card logo" />
            <h1 > ········{number.toString().slice(-4)} </h1>

            <div>
                <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
            </div>
            <h3>{owner}</h3>
           
        </div>
    )
}

export default CreditCard