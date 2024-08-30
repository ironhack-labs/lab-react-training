function CreditCard({ 
    type, 
    number, 
    expirationMonth, 
    expirationYear, 
    bank, 
    owner, 
    bgColor, 
    color 
  }) {
    const CreditCardNumber = `**** **** **** ${number.slice(-4)}`;

    return (
        <div style={{ backgroundColor: bgColor, color: color, padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <div>
        <p>{type}</p>
      </div>
      <div>
        <p>{CreditCardNumber}</p>
      </div>
      <div>
        <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
        <p>{bank}</p>
      </div>
      <div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;