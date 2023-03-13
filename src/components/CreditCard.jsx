function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  console.log(bgColor, color)

  function formatMonth(expirationMonth) {
    if (expirationMonth < 9)
      return "0" + expirationMonth;
    else
      return expirationMonth;
  }

  let typeCard = '';
  switch (type) {
    case "Visa":
      typeCard = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png';
      break;
    default:
      typeCard = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png'
      break;
  }

  return (
    <div className="flex justify-center mb-8">
      <div className={`bg-[${bgColor}] w-3/5 h-44 rounded-xl flex flex-col justify-center px-4 py-2 text-${color} font-light border-4 border-slate-300 hover:scale-110 hover:shadow-2xl`}>
        <div className="flex justify-end">
          <img src={typeCard} alt="typeCard" className="h-4 px-6" />
        </div>
        <div className="text-3xl mt-2 font-medium flex justify-center items-center">
          <span className="mx-2 text-6xl">····</span>
          <span className="mx-2 text-6xl">····</span>
          <span className="mx-2 text-6xl">····</span>
          <span className="mx-2 font-normal">{number.slice(-4)}</span>
        </div>
        <div className="flex">
          <span className='pr-8'>Expires {formatMonth(expirationMonth)}/{expirationYear.toString().slice(-2)}</span>
          <span>{bank}</span>
        </div>
        <div className="flex">
          <span>{owner}</span>
        </div>
      </div>
    </div>
  );
}

CreditCard.defaultProps = {
  type: '',
  number: '',
  expirationMonth: '',
  expirationYear: '',
  bank: '',
  owner: '',
  bgColor: '',
  color: ''
}

export default CreditCard;

