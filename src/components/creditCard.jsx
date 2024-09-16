

const CreditCard = (props) => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color, } = props;

    const divStyle = {
        backgroundColor: bgColor,
        color: color,
    };

    return (
        <div style={divStyle} className="credit-card">
            <div className="card-logo">
                {type}
            </div>
            <div className="card-number">
                <h2>•••• •••• •••• {number.slice(12)}</h2>
            </div>
            <div className="card-info">
                <p>
                    Expires {expirationMonth}/{expirationYear} {bank}
                </p>
                <p>{owner}</p>
            </div>
        </div>
    );
};

export default CreditCard