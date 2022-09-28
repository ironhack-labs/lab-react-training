import visaLogo from "../assets/images/visa.png"
import masterLogo from "../assets/images/mastercard.png"


function CreditCard(props){
    let logo, style;

    if(props.type === "Visa"){
        logo = visaLogo;
        style = {
            width: 70, 
            height: 25,
            marginLeft: 250,
            marginTop: 20
        }
    }else{
        logo = masterLogo
        style = {
            width: 70, 
            height: 25,
            marginLeft: 250,
            marginTop: 20
        }
    }
    
    const cardColor = {
        backgroundColor: props.bgColor
    }

    const textColor  = {
        color: props.color
    }

    return(
    <div style={cardColor} id="credit-card">
        <img  style={style} src={logo} alt="logo" />
        <div style={textColor} id="card-number">
            <span className="dots">&#x2022;&#x2022;&#x2022;&#x2022;</span>
            <span className="dots">&#x2022;&#x2022;&#x2022;&#x2022;</span>
            <span className="dots">&#x2022;&#x2022;&#x2022;&#x2022;</span>
            <span id="lastNums">{props.number.substring(12,16)}</span>
        </div>
        <div style={textColor} id="card-info">
            <span>Expires {props.expirationMonth}/{props.expirationYear}</span>
            <span>{props.bank}</span>
        </div>
        <p style={textColor}>{props.owner}</p>
    </div>
    )
}

export default CreditCard;