import PropTypes from 'prop-types';

function CreditCard(props) {
    const { type, number, expirationMonth, expirationYear, 
            bank, owner, bgColor, color } = props;
    
    const creditCardNumber = "•••• •••• ••••" + number.slice(-4);

    const cardAppearance = {
        backgroundColor: bgColor,
        color: color
    }

    const imgStyle = {
        width: '50px',
        height: 'auto'
    }

    return (
        <div style={cardAppearance}>
            <div>
                <img 
                    src={type === 'Visa' ? 'visa-logo.png' : 'mastercard-logo.png'}
                    alt={type}
                    style={imgStyle}
                />
            </div>
            <div>
                <p>{creditCardNumber}</p>
            </div>
            <div>
                <span>Expires {expirationMonth}/{expirationYear}</span> 
                <span>{bank}</span>
            </div>
            <p>{owner}</p>
        </div>
    );
}

CreditCard.propTypes = {
    type: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    expirationMonth: PropTypes.number.isRequired,
    expirationYear: PropTypes.number.isRequired,
    bank: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};

export default CreditCard;