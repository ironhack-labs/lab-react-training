const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
    let company = ''
    switch (type) {
        case 'visa':
            company = 'Visa';
            break;
        default:
            company = 'Master Card'
            break;

    }

    return (
        <div style={{ backgroundColor: bgColor, color: color }}>
            <p>{company}</p>
            <p>{number}</p>
            <p>{expirationMonth}</p>
            <p>{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>

    )
}

export default CreditCard;

