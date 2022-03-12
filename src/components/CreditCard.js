//jshint esversion:8


export const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {

  return (
    <div style={{backgroundColor: bgColor, width: "350px", height: "150px",}}>
        <span>{type}</span>
        <p>{number}</p>
        <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
        <p>{owner}</p>
    </div>
  );
};