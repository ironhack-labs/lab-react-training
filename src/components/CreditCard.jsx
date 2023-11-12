import visaImage from "../assets/images/visa.png"
import masterCardImage from "../assets/images/master-card.svg"

function CreditCard(props) {
    const creditCardStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    }

    let shortYear = props.expirationYear.toString().slice(2);
    let secureNumber = props.number.slice(-4);


    return (
        <div className="CreditCard" style={creditCardStyle}>
            <div className="type"><img src={props.type == 'Visa' ? visaImage : masterCardImage} alt="CreditCard Image" /></div>
            <div className="number">
                •••• •••• •••• &nbsp;
                {secureNumber}
            </div>
            <div className="expires">
                Expires <span>{props.expirationMonth < 10 ? "0" + props.expirationMonth : props.expirationMonth}</span>/<span>{shortYear}</span>
                <span className="bank">{props.bank}</span>
            </div>

            <div className="owner">{props.owner}</div>
        </div>
    );
}

export default CreditCard;