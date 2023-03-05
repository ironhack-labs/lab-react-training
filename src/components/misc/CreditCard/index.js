import "./index.css"
import visaImg from "../../../assets/images/visa.png"
// import mastercardImg from "../../../assets/images/master-card.svg"



function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){

    let logo
    
    if (type === "Visa") {
        logo = visaImg
        } 
        // else if (type === "Master Card") {
        // logo = {mastercardImg}
        // }


    const divStyle = {
        backgroundColor: bgColor,
        color: color,
        }
    

    if(expirationMonth <10){
        expirationMonth = "0" + expirationMonth
    }
        

    return (
        <div className="CreditCard" style={divStyle}>
            <div className="logobanco">
            <img src={logo} alt="logo"/>
            </div>
            <div className="targetnumber">
                <h4>**** **** **** {number.slice(-4)}</h4>
            </div>

            <div className="expiration">
                <p>Expires: {expirationMonth}/{expirationYear %100}</p>
                <p class="bank">{bank}</p> 
            </div>

            <div className="owner">
                <p>{owner}</p>
            </div>


        </div>
    );
};

export default CreditCard;