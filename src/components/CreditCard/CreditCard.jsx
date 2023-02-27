import './CreditCard.css'
import masterImage from '../../assets/images/mastercardIcon.png'
import visaImage from '../../assets/images/visaIcon.png'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const expires = `${expirationMonth} / ${expirationYear}`

    let image
    if (type === "Visa") image = visaImage
    else if (type === "Master Card") image = masterImage

    let background = {
        backgroundColor: `${bgColor}`,
        color: `${color}`
    }

    return (
        <article style={background} className="CreditCard">
            <div className="Img">
                <img src={image} alt={type} />
            </div>
            <div className="Number">
                <p>{number}</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    <p>Expires: {expires} </p>
                </div>
                <div>
                    <p>{bank}</p>
                </div>
            </div>
            <div>
                <p> {owner}</p>
            </div>

        </article>
    )

}
export default CreditCard

