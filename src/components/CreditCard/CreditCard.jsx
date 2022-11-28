import './CreditCard.css';
const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let classType = "";

    if (type === "Master Card") {
        classType = "type-img-mastercard";
    } else {
        classType = "type-img-visa";
    }

    if (expirationMonth < 10) {
        expirationMonth = "0" + expirationMonth
    }

    return (
        <div className="card" style={{ backgroundColor: bgColor, color: color }}>
            <div className={`type-img ${classType}`}></div>
            <div className='clear'></div>
            <h1>{`**** **** **** ${number.substr(number.length - 4)}`}</h1>
            <div className='expires-text'>
                <span>Expires</span>&nbsp;<span>{`${expirationMonth}/${expirationYear.toString().substr(expirationYear.toString().length - 2)}`}</span>&nbsp;<span>{bank}</span><br></br>
                <span>{owner}</span>
            </div>

        </div>
    );
}

export default CreditCard;