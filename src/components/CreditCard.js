import visaImg from '../assets/images/visa.png';
import masterImg from '../assets/images/master-card.svg';

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    const styles = {
        backgroundColor: bgColor,
        color: color
    };

    const displayNum = number.toString().slice(-4);
    const month = expirationMonth;
    const cardType = () => {
        if (type === "Visa") {
            return <img style={{ width: "200px" }} src={visaImg} alt="Visa logo"></img>
        } else {
            return <img style={{ width: "200px" }} src={masterImg} alt="Master Card logo"></img>
        }
    }

    return (
        <div className="AllCards">
            <div className="CreditCard" style={styles}>
                {cardType()}
                <p>•••• •••• •••• {displayNum}</p>
                <p> Expires 0{month}/{expirationYear}{bank}</p>
                <p>{owner}</p>
            </div>
        </div>
    )
}

export default CreditCard;