import { ReactComponent as masterCard } from "../assets/images/master-card.svg";
import visa from "../assets/images/visa.png";

const CreditCard = (props) => {
    const {
        type, 
        number, 
        expirationMonth, 
        expirationYear, 
        bank, 
        owner,
        bgColor, 
        color
    } = props

    const cardStyle = {
        display: "flex",
        "flex-direction": "column",
        "background-color": `${bgColor}`,
        "color": `${color}`,
        "width": 545,
        "heidht": 285,
        "border-radius": 25,
        "margin": 50,
        "padding": 50
    }

    let cardTypeImage 
        if (type === "Visa"){
            cardTypeImage = visa
        } else if (type === "Master Card"){
            cardTypeImage = require({masterCard})
        }
    
    return(
        <div className="cardDisplay" style={cardStyle}>
            <img className="cardType" style={{width: 80, "float":"right"}} src={cardTypeImage} alt={type}/>
            <p style={{"font-size": 30, "text-align": "center"}}> • • • •  • • • •  • • • •  {number.slice(-4)}</p>
            <p style={{"font-size": 10, "text-align": "left"}}> Expires {expirationMonth}/{expirationYear}    {bank}</p>
            <p style={{"font-size": 10, "text-align": "left"}}> {owner}</p>
        </div>
    )
}

export default CreditCard