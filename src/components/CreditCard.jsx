import { PropTypes } from "prop-types";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    let cardTypeImage = '';
  if (type === 'Visa') {
    cardTypeImage = '/src/assets/images/visa.png'; 
  } else if (type === 'Master Card') {
    cardTypeImage = '/src/assets/images/master-card.svg'; 
  }
  return (
  <div>
    <div className="w-72 h-40 rounded-lg p-4 flex flex-col justify-between shadow-lg mb-4" style={{ backgroundColor: bgColor, color: color }}>
      <div className="flex justify-end">
        <img src={cardTypeImage} alt={type} className="w-12 h-8" />
      </div>
      <div className="text-xl tracking-widest">
        •••• •••• •••• {number.slice(-4)}
      </div>
      <div className="flex justify-between text-sm">
        <div>
          Expires {expirationMonth.toString().padStart(2, '0')}/{expirationYear.toString().slice(-2)}
        </div>
        <div>
          {bank}
        </div>
      </div>
      <div className="text-sm">
        {owner}
      </div>
    </div>
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
