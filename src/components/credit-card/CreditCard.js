
function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) {

    function brandCard(type) {
        if(type === 'Visa'){
            return 'visa.png'
        } else {
            return '../../../public/img/master-card.svg'
        }
    }

    return (
        <div className="creditCard" >
            <div className="d-flex justify-content-end">
                <img src={`img/${brandCard}`} alt={type} />
            </div>
            
            <h5 className="text-center fs-3">{number}</h5>
            <div className="row d-flex justify-content-between">
                <p className="col-8">Expires: {expirationMonth}/{expirationYear}</p>
                <p className="col-4">{bank}</p>
            </div>
            
            <p>{owner}</p>
        </div>
    );
}

export default CreditCard;