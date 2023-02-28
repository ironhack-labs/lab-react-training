import './CreditCard.css'
import visa from '../../assets/images/visaIcon.png'
import mastercard from '../../assets/images/mastercardIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const style = { backgroundColor: `${bgColor}`, color: `${color}` }

    let card

    if (type === 'Master Card') {
        card = mastercard
    }
    else if (type === 'Visa') {
        card = visa
    }

    return (
        <div className='CreditCard' style={style}>

            <div className='type'>
                <img src={card} alt="logo" />
            </div>

            <div className='number'>
                <p>{number}</p>
            </div>

            <div className='datebank'>
                <div className='date'>
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                </div>

                <div className='bank'>
                    <p>{bank}</p>
                </div>
            </div>


            <div className='owner'>
                <p>{owner}</p>
            </div>


        </div>

    )
}

export default CreditCard