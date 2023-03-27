function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  let src = ''
  if (type === "Visa") {
    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Visa_2014.svg/1024px-Visa_2014.svg.png"
  } else if (type === "Master Card") {
    src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/MasterCard_early_1990s_logo.svg/1024px-MasterCard_early_1990s_logo.svg.png"
  }


  // const divStyle = {
  //   width: 60,
  // }

  const visibleDigits = number.slice(-4);

  const year = expirationYear.toString().slice(-2)

  return (
    <div className={`card m-3 mx-auto shadow text-${color}`} style={{ backgroundColor: bgColor }}>
      <div className="card-body m-2 mb-0 pb-0">
        <div className="text-end">
          <img className="me-2 mt-2" src={src} alt="visa" style={{ width: 60 }}></img>
        </div>
        <div className="text-center mt-4 mb-4">
          <h5 className="card-text">●●●● ●●●● ●●●● {visibleDigits}</h5>
        </div>
        <div className="d-flex flex-row ms-3">
          <p className="mb-0">Expires {expirationMonth}/{year}</p>
          <h5 className="ms-5 mb-0" >{bank}</h5>
        </div>
        <div className="pt-0">
          <h4 className="mb-3 ms-3">{owner}</h4>
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