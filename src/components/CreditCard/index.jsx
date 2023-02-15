function CreditCard(props) {
    const { bgColor, color, number, expirationMonth, expirationYear, bank, owner } = props;
    const cardNumber = '•••• •••• •••• ' + number.slice(-4);
    const cardExp = `${expirationMonth.toString().padStart(2, '0')}/${expirationYear.toString().slice(-2)}`;
    const style = {
    backgroundColor: bgColor,
    color: color,
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.3)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '350px',
    height: '200px',
    };
    return (
    <div style={style}>
        <div>{bank}</div>
        <div>{cardNumber}</div>
        <div>
        <span>Expires {cardExp}</span>
        <span>{owner}</span>
        </div>
    </div>
    );
}

export default CreditCard;