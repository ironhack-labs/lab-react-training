import Visa from "../assets/images/visa.png"
//import Master from "../assets/images/master-card.svg"
// import da Master gerou erro relacionado ao svg

const CreditCard = ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) => {
  let src = "";
  if(type === "Visa"){
      src = Visa}
//   } else {
//       src = Master
//   }
  return (
    <div clasName="credit-card" style={{
        backgroundColor: bgColor,
         color: color
    }}>
        <div>
            <img src={src} alt="Credit card"/>
        </div>
        <div className="card-number">
            •••• •••• •••• {number.slice(-4)}
        </div>
        <div>
            <p>Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</p>
            <p>{bank}</p>
            <p>{owner}</p>
        </div>
    </div>
  )
}

export default CreditCard