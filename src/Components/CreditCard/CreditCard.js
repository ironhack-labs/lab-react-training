import "./CreditCard.css"
import Visa from "./visa.png";
import MasterCard from "./master-card.svg"
export const CreditCard = (props) => {

    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props;

    let image = "";

    if (type === "Visa") image = Visa;
    else image = MasterCard;

    const fourLastNumbers = number.slice(-4);
    const twoLastNumbers = expirationYear.toString().slice(-2);

    let monthPlus = expirationMonth.toString();
        if (monthPlus < 10) {
            monthPlus = "0" + monthPlus;
    }

    return (
        <div className="container">

        <div className="CreditCard" style={{backgroundColor: bgColor, color: color }}>
            <div>
                <div>
                    <img className="img" src={image} alt={type}/>
                </div>
                <h4>•••• •••• •••• {fourLastNumbers}</h4>
            </div>
            <div className="generalInformation">
                <p>
                    Expires {monthPlus}/{twoLastNumbers} &emsp; {bank}
                </p>
                <p className="dataOwner">{owner}</p>
            </div>
        </div>
        </div>
    )
}
