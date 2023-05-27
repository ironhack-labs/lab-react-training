

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
  const divStyle = {
    backgroundColor: `${bgColor}`,
    color: `${color}`,
  };

  return (
    <div className="flex flex-col w-80 p-6 rounded-xl p-2 m-2" style={divStyle}>
      <p className="self-end text-blue-800 text-bold">{type}</p>
      <p className="self-end text-2xl py-4">
        <span className="p-2">****</span>****<span className="p-2">****</span>
        {number && number.slice(12)}
      </p>
      <div className="flex justify-start gap-6">
        <div className="flex">
          <p>Expires {expirationMonth}</p>/<p>{expirationYear}</p>
        </div>
        <p>{bank}</p>
      </div>
      <p>{owner}</p>
    </div>
  );
};

export default CreditCard;
