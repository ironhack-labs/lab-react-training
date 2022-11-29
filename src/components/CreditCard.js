import visa from "../assets/images/visa.png";
import master from "../assets/images/visa.png";
//import master from "../assets/images/master-card.svg";
//import Icon from "./Icon";

function CreditCard(props){
    const {type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;
    const divStyle = {
        display: "flex",
        "flex-direction": "column",
        "background-color": `${bgColor}`,
        "color": `${color}`,
        "width": 400,
        "heidht": 50,
        "border-radius": 15,
        "margin": 20,
        "padding": 20
    };

    return(
        <div style={divStyle}>
            {type === "Visa" && <img style={{width: 60, "float":"right"}} src= {visa} alt="visa"/>}
            {type === "Master Card" && <img style={{width: 60, "float":"right"}} src= {master} alt="master"/>}
            {/* <div style={{width: 60}}>{type === "Master Card" && <Icon />}</div> */}
            
            <p style={{"font-size": 24, "text-align": "center"}}> • • • •  • • • •  • • • •  {number.slice(-4)}</p> 
            <p style={{"text-align": "left", "line-height": 3}}>Expires {expirationMonth}/{expirationYear}  {bank}</p>
            <p style={{"text-align": "left", "line-height": 3}}>{owner}</p>
        </div>
    )
}

export default CreditCard;