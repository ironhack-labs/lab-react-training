

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    const hiddenNumber = number.replace(/\d(?=\d{4})/g, '•');

    if (type === "Master Card") type = 'master-card.svg'; else type = 'visa.png';

    return (
        <div className="card mb-3 max-card-width" style={{ 'backgroundColor' : bgColor, 'color' : color }} >
            <div className="card-header">
                <img className="icon-width" style={{'float' : 'right'}} src={`img/${type}`} alt={type} />
            </div>
            <div className="card-body">
                <h5 className="card-title">{hiddenNumber}</h5>
                <p className="card-text">Expires {expirationMonth}/{expirationYear}     {bank}</p>
                <p className="card-text">{owner}</p>
            </div>
        </div>
    );
}

export default CreditCard;