import './CreditCard.css'

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {

    let imgType = ""

    if (type === "Master Card") {
        imgType = "./public/mastercardicon.png"
    } else {
        imgType = "./public/visa.png"
    }


    const creditCardStyle = {
        backgroundColor: bgColor,
        color: color

    };

    return (
        <div className="credit-card" style={creditCardStyle}>
            <img className="creditImage" src={imgType} alt="image" />
            <div className="number">**** **** **** {number.slice(-4)}</div>
            <div className="expiration">Expires {expirationMonth}/{expirationYear} {bank}</div>
            <div className="owner">{owner}</div>
        </div>
    );
}

export default CreditCard