

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  let cardPhoto = ''
  if (type === "Visa") {
    cardPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Visa_2014.svg/1024px-Visa_2014.svg.png"
  } else if (type === "Master Card") {
    cardPhoto = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1024px-MasterCard_early_1990s_logo.svg.png"
  }


  return (
    <div className={`card m-5  text-${color}`} style={{ backgroundColor: bgColor }}>
      <div className="card-body">
        <div className="text-end">
          <img className=" mt-1" src={cardPhoto} alt="Card" style= {{width: 80}}></img>
        </div>
        <div className="text-center m-4">
          <p className="card-text fs-3"> <span className="fs-6"> ●●●●  ●●●●  ●●●● </span>{number.slice(-4)}</p>
        </div>
        <div className="d-flex flex-row ms-3">
          <p className="mb-0">Expires {expirationMonth}/{expirationYear.toString().slice(-2)}</p>
          <h5 className="ms-4 " >{bank}</h5>
        </div>
        <div className="pt-0">
          <p className="d-flex flex-row ms-3">{owner}</p>
        </div>
      </div>
    </div>
  )
};


CreditCard.defaultProps = {
  type: '',
  number: '',
  expirationMonth: '',
  expirationYear: '',
  bank: '',
  owner: '',
  bgColor: '',
  color: '',
};

export default CreditCard