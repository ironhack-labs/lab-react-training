
function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    
    let logo;
    switch (type) {
        case 'Visa':
            logo = 'visa.png';
            break;
        case 'Master Card':
            logo = 'master-card.svg';
            break;
        default:
            logo = 'visa.png'; 
    }

    return (
        <div className="creditCard d-flex justify-content-around p-3" style={{ backgroundColor: bgColor }}>
            <div className="d-flex justify-content-end">
                <img src={`${logo}`} alt={type} />
            </div>
            
            <h5 className="text-center fs-4">{number.replace(/.(?=.{4})/g, '●')}</h5>
            <div className="row d-flex justify-content-between">
                <p className="col-8" style={{ color }}>Expires: {expirationMonth}/{expirationYear}</p>
                <p style={{ color }} className="col-4">{bank}</p>
            </div>
            
            <p style={{ color }}>{owner}</p>
        </div>
    );
}

export default CreditCard;