import "./CreditCard.css";
import visaPic from "../../../assets/images/visa.png";
import mcPic from "../../../assets/images/master-card.svg";

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
  const cardStyle = {
    backgroundColor: bgColor,
    color,
  };
  let typeSrc;
  switch (type) {
    case "Visa":
      typeSrc = visaPic;
      break;
    case "Master Card":
      typeSrc = mcPic;
      break;
  }
  console.log(typeSrc);
  return (
    <div className="mb-2 mx-2 px-2 py-4 credit-card" style={cardStyle}>
      <img src={typeSrc} className="mb-0 float-right" />
      <p className="mb-0 mt-4">**** **** **** {number.slice(12, 16)}</p>
      <span className="mb-0">
        Expires {expirationMonth}/{expirationYear}
      </span>
      <span className="px-3">{bank}</span>
      <p className="mb-0">{owner}</p>
    </div>
  );
}

export default CreditCard;

<CreditCard
  type="Visa"
  number="0123456789016984"
  expirationMonth={12}
  expirationYear={2019}
  bank="Name of the Bank"
  owner="Firstname Lastname"
  bgColor="#ddbb55"
  color="white"
/>;
