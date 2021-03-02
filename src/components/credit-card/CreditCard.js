

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    
    // number.replace('/\d(?=\d{4})/mg', "•");
    const hiddenNumber = '••••••••••••' + number.substring(12, 16);

    return (
        <div className="container d-flex flex-row-reverse" >
            <div className="row">
                <img style={`width`} src={`img/${type}.png`}  alt={type} />
            </div>
            <div className="row">
                {hiddenNumber}
            </div>
        </div>
    );
}

export default CreditCard;