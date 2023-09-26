function CreditCard({ creditCardList }) {
    return (
      <div>
        {creditCardList.map((creditCard, index) => {
  
          let cardLogo;
          if (creditCard.type === 'Visa') {
            cardLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1920px-Visa_Inc._logo.svg.png';
          } else if (creditCard.type === 'Master Card') {
            cardLogo = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png';
          }
  
          const cardStyle = {
            backgroundColor: creditCard.bgColor,
            color: creditCard.color,
            width: '300px',
            borderRadius: '15px',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          };
  
          return (
            <div key={index} style={cardStyle}>
              <img src={cardLogo} alt={creditCard.type} style={{ width: '70px' }} />
              <div style={{ fontSize: '24px', marginTop: '20px' }}>
                •••• •••• •••• {creditCard.number.slice(-4)}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: '20px' }}>
                <div>
                <p>Expires {creditCard.expirationMonth < 10 ? "0" + creditCard.expirationMonth : creditCard.expirationMonth}/{creditCard.expirationYear.toString().slice(-2)}</p>
                  <p>{creditCard.bank}</p>
                </div>
                <div>
                  <p>{creditCard.owner}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default CreditCard;