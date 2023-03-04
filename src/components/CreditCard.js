function CreditCard ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    let year = expirationYear.toString();
    let month = ``;
    if(expirationMonth < 10){
        month = `0${expirationMonth}`
    } else {
        month = expirationMonth;
    }

    const creditCardStyle = {
        color: `${color}`,
        backgroundColor: `${bgColor}`,
        width: 300,
        height: 150,
        borderRadius: 5,
        margin: 10,
    }

    return (
        <div className="creditCard" style={creditCardStyle}>
            <img alt='logo'/>
            <p className="creditCardNumber"> **** **** **** {number.slice(12)}</p>
            <span> Expires {month}/{year.slice(2)}    {bank}</span>
            <p className="creditCardOwner">{owner}</p>
        </div>   
    );
};

export default CreditCard;