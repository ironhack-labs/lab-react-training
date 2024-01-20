import PropTypes from 'prop-types';
import imgVisa from '../assets/images/visa.png'
import imgMastercard from '../assets/images/master-card.svg'

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
                    src={type === 'Visa' ? imgVisa : imgMastercard }
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