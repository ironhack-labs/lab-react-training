import masterCard from "../assets/images/visa.png";
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
    // "":"",
    const cardStyle = {
        "display": "flex",
        "flexDirection": "column",
        "backgroundColor": `${bgColor}`,
        "color": `${color}`,
        "width": "545px",
        "height": "285px",
        "borderRadius": "25px",
        "marginTop": "120px",
        "marginLeft":"60%",
        "padding": "50px",
        "align":"auto",    
    }

    let cardTypeImage 
        if (type === "Visa"){
            cardTypeImage = visa
        } else if (type === "Master Card"){
            cardTypeImage = masterCard
        }
    let bullets = "• • • •  • • • •  • • • •"
    let space = "  "
    return(
        <div style={{"alignItems":"right", "width": "545px", "height": "285px",}}>
            <div className="cardDisplay" style={cardStyle}>
                <p><img className="cardType" style={{"width": "80px", "marginRight":"-450px"}} src={cardTypeImage} alt={type}/></p>                 {/* wont move right */}
                <p style={{"fontSize": "40px", "textAlign": "center", "marginTop":"75px"}}> <span>{bullets}</span> {space}  {number.slice(-4)}</p>
                <p style={{"fontSize": "25px", "textAlign": "left", "lineHeight":"-10px"}}> Expires {expirationMonth}/{expirationYear}    {bank}</p>
                <p style={{"fontSize": "25px", "textAlign": "left", "lineHeight":"-10px"}}> {owner}</p>
            </div>
        </div>
    )
}

export default CreditCard