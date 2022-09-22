import Icon from "../assets/images/master-card"
console.log("Icon from assets: ", Icon())
console.log("Icon from tag: ", <Icon/>)
function CreditCard({
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
  img
}) {
  return <div style={{ background: `${bgColor}`, color: `${color}`}}>
    <img style={{width: "60px"}} src={img} alt="" />
    <p>**** **** **** {number.slice(12)}</p>
    <p>Expires {expirationMonth}/{expirationYear} {bank}</p>
    <p>{owner}</p>
  </div>;
}

export default CreditCard;
