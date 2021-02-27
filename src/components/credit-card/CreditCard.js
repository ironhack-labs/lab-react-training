const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, className}) => {
    const spacedNumber = number.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ");
    const numberToDisplay = spacedNumber.replace(/\d(?=.{4})/g, '•');
    return (
        <div className={`creditCard d-flex flex-column justify-content-between py-3 px-4 ${className}`} style={{backgroundColor: bgColor, color}}>
            <div className="d-flex justify-content-end">
                <img src="/img/visa.png" alt={type} style={{height: '20px'}}/>
            </div>
            <h3>{numberToDisplay}</h3>
            <div className="d-flex flex-column align-items-start">
                <div className="d-flex">
                    <p>Expires {expirationMonth}/{expirationYear}</p>
                    <p>{bank}</p>
                </div>
                <p>{owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;