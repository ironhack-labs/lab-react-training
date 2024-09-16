// import MasterCardImg from '../assets/images/master-card.svg';
import VisaImg from '../assets/images/visa.png';

export function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    const lastDigits = number.split('').splice(number.length - 4, number.length).join('')
  return(
    <div className="rounded-2" style={{backgroundColor: bgColor, width: '340px', height: '190px', color: `${color}`}}>
    <div className="d-flex justify-content-end p-3">
      {type === 'Visa' ? <img className="card-logo" src={VisaImg} /> : "Mastercard"}
      </div>
      <div className="d-flex gap-2 justify-content-center align-items-end" style={{height: "80px"}}>
      <p className="card-dots">....</p>
      <p className="card-dots">....</p>
      <p className="card-dots">....</p>
      <p className="fs-2 pb-1">{lastDigits}</p>
      </div>
      <div>
        <div className="d-flex gap-1 p-0">
            <p className="m-0 px-3">Expires {expirationYear}/{expirationMonth}</p>
            <p className="m-0 px-3">{bank}</p>
        </div>
        <p className="text-start m-0 px-3">{owner}</p>
      </div>
    </div>
  );
}