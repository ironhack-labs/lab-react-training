export default function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color
}) {
  const checkCCType = () => {
    if (type === 'Visa' || type === 'Master Card') {
      return type;
    } else {
      return 'Not a supported credit card type';
    }
  };

  const formattedNumber = number.replace(/(\d{4})/g, '$1 ');

  return (
    <div className="credit-card">
      <style jsx>{`
        .credit-card {
          background-color: ${bgColor};
          color: ${color};
          width: 300px;
          border-radius: 10px;
          padding: 20px;
          box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .credit-card .type {
          display: flex;
          justify-content: flex-end;
          font-size: 24px;
        }
        .credit-card .number {
          font-size: 18px;
          margin-bottom: 20px;
          letter-spacing: 2px;
          text-align: center;
          white-space: nowrap;
        }
        .credit-card .details {
          display: flex;
          justify-content: space-between;
        }
        .credit-card .details .info {
          font-size: 14px;
          margin-bottom: 10px;
        }
        .credit-card .details .bank {
          font-size: 12px;
          margin-left: 10px;
        }
      `}</style>
      <div className="type">{checkCCType()}</div>
      <div className="number">{formattedNumber}</div>
      <div className="details">
        <div className="info">
          <div>{owner}</div>
          <div>
            Expires {expirationMonth}/{expirationYear}
          </div>
        </div>
        <div className="bank">{bank}</div>
      </div>
    </div>
  );
}
