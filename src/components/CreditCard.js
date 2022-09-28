import Icon from "../assets/images/master-card"


// console.log("Icon from assets: ", Icon())
// console.log("Icon from tag: ", <Icon/>)
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
  return <div style={{ display: "flex", flexDirection: "column", background: `${bgColor}`, color: `${color}`, height: "200px", width: "300px"}}>
    {type==="Visa" 
      ? <img style={{width: "60px", alignSelf: "flex-end"}} src="images/visa.png" alt="" />
      : <Icon />
      }
    <p style={{fontSize: "1.5rem"}}>**** **** **** {number.slice(12)}</p>
    <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
    <p>{owner}</p>
  </div>;
}

export default CreditCard;
