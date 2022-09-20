import './CreditCard.css'
import visaLogo from '../../assets/images/visa.png'
import mastercardLogo from '../../assets/images/visa.png'



const CreditCard = (props) => {
    // console.log(props);

    const cardColor = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let imgSrc
    switch (props.type) {
        case 'Visa':
            imgSrc = visaLogo
            break;
        case 'MasterCard':
            imgSrc = mastercardLogo
            break;
        default:

            imgSrc = ''
    }

    const displayedNumbers = `•••• •••• •••• ${props.number.slice(12)}`



    return (
        <>
            <div className="creditCard" style={cardColor}>
                <img src={imgSrc} alt={`${props.type} logo`} ></img>
                <p className='numbers'>{displayedNumbers}</p>
                <p>Expires {props.expirationMonth >= 10 ? props.expirationMopnth : '0' + props.expirationMonth}/{props.expirationYear} {props.bank}</p>
                <p>{props.owner}</p>

            </div>
        </>

    )
}

export default CreditCard;