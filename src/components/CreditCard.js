import imageVisa from "./../../src/assets/images/visa.png"
import imageMC from "./../../src/assets/images/master-card.svg"

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, image}) => {
    const styles = {background: `${bgColor}`, color: `${color}`}
    if (type === 'Visa') {
        image = imageVisa
    }
    
    if (type === 'Master Card') {
        image = imageMC
    }
    return (
        <article style={styles}>
            <img src={image}/> 
            <p>{type}</p>
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </article>
    )
}

export default CreditCard