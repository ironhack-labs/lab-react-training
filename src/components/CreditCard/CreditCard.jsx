import './CreditCard.css'
import masterCardImg from '../../assets/images/mastercardIcon.png'
import visaImg from '../../assets/images/visaIcon.png'

const CreditCard = ({ creditCardInfo }) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = creditCardInfo
    const expires = `${expirationMonth} / ${expirationYear}`
    const bgStyle = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    let image
    if (type === "Visa") { image = visaImg }
    else if (type === "Master Card") { image = masterCardImg }



    return (<article style={bgStyle} className="CreditCard">
        <div>
            <img src={image} alt={type} />
        </div>
        <div>
            <p>{number}</p>
        </div>
        <div className='divRare'>
            <div>
                <p>Expires {expires} </p>
            </div>
            <div>
                <p>{bank}</p>
            </div>
        </div>
        <div>
            <p>{owner}</p>
        </div>
    </article>
    )
}

export default CreditCard