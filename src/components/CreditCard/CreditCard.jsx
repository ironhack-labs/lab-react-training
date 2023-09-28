/* eslint-disable react/prop-types */
const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const numberPad = number.slice(-4).padStart(number.length, "*");

  const groupsNumber = [];
  for (let i = 0; i < numberPad.length; i += 4) {
    groupsNumber.push(numberPad.slice(i, i + 4));
  }
  const numberFormated = groupsNumber.join(" ");

  return (
    <div
      style={{
        backgroundColor: bgColor,
        position: "relative",
        color: color,
        width: "300px",
        borderRadius: "8px",
      }}
    >
      <img
        src={type === "Visa" ? "/visa.png" : "/master-card.svg"}
        alt="Type Credit Card"
        style={{
          width: "50px",
          position: "absolute",
          right: "1rem",
          top: "1rem",
        }}
      />
      <p
        style={{
          marginTop: "3rem",
          textAlign: "start",
          marginLeft: "2rem",
          fontSize: "28px",
        }}
      >
        {numberFormated}
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          marginLeft: "1rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "1rem", marginBottom: 0 }}>
            Expires{" "}
            {expirationMonth < 10 ? `0${expirationMonth}` : expirationMonth}/
            {expirationYear.toString().slice(2)}
          </p>
          <p style={{ marginBottom: 0 }}>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
