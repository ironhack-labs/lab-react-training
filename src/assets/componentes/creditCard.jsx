/* eslint-disable react/prop-types */
//Props Credit Card//
function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
}) {
    //Logo tarjeta//
    const cardLogo =
        type === 'Visa'
            ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg'
            : 'https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1996_100_2x.png';

    //Últimos 4 dígitos//
    const lastFourNumbers = number.slice(-4);

    const cardStyle = {
        width: '300px',
        padding: '20px',
        borderRadius: '10px',
        backgroundColor: bgColor,
        color: color,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    };

    return (
        <div style={cardStyle}>
            <img src={cardLogo} alt={type} style={{ width: '60px', marginBottom: '10px' }} />
            <div style={{ fontSize: '24px' }}>**** **** **** {lastFourNumbers}</div>
            <div>
                <span>Expires {expirationMonth}/{expirationYear}</span>
            </div>
            <div>{bank}</div>
            <div>{owner}</div>
        </div>
    );
}

export default CreditCard;
