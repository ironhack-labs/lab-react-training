import '../App.css'

function CreditCard({
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color
  }) 
  {
   const lastFourDigits = number.slice(-4);

   let cardIcon;

   if (type === 'Visa') {
     cardIcon = 'Ⓥ';
   } else if (type === 'Master Card') {
     cardIcon = '󠁍Ⓜ️';
   } else {
     cardIcon = '';
   }

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
    <div className="card-type">{type}{cardIcon}</div>
    <div className="card-number">**** **** **** {lastFourDigits}</div>
    <div className="card-expiration">
      Expires: {expirationMonth}/{expirationYear}
    </div>
    <div className="card-bank">{bank}</div>
    <div className="card-owner">{owner}</div>
  </div>
  )
}

export default CreditCard