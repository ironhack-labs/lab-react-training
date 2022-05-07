import Visa from "../assets/images/visa.png";
import MasterCard from "../assets/images/master-card.svg";

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
    let src = "";
    if(type === "Visa") {
        src = Visa;
    }
    if(type === "Master Card"){
        src = MasterCard;
    }
    return (
        <div className="credit-card" style={{
            backgroundColor: bgColor,
            color: color
        }}>
            <div> 
                <img src={src} alt="card"/>
            </div> img=src
            <div className="card-number">
                •••• •••• •••• {number.slice(-4)}
            </div>/

            <div>
                <p>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}     {bank}</p>
                <p>{owner} </p>
            </div>

        </div>

    )
}

export default CreditCard;