
import visaImg from '../../img/visa.png';
import masterImg from '../../img/master-card.svg';


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {
    
    let logo;
    switch (type) {
        case 'Visa':
            logo = visaImg;
            break;
        case 'Master Card':
            logo = masterImg;
            break;
        default:
            logo = visaImg; 
    }

    return (
        <div className="creditCard d-flex justify-content-around p-3" style={{ backgroundColor: bgColor }}>
            <div className="d-flex justify-content-end">
                <img src={`${logo}`} style={{width: "3rem"}} alt={type} />
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