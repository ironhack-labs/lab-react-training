import visaImg from "../assets/images/visa.png";
import masterCardImg from "../assets/images/dice6.png";

function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    const dottedCardNr = number.substring(0, 11).replace(/./g, '*'); + number.substring(12);
    console.log(dottedCardNr);
    //.match + regex divides the string into 4-character arrays, .join puts them into 1 string with a space between
    const dottedCardNrSpaces = dottedCardNr.match(/.{1,4}/g).join(' ');

    return (
      <div className="" style={{ backgroundColor: {bgColor}, color: {color}}}>
        { type === "Visa" ? <img src={visaImg}/> : <img src={masterCardImg}/>}
        <h2>{dottedCardNrSpaces}</h2>
        <p>
            <span>Expires {expirationMonth}/{expirationYear}</span><span>{bank}</span>
        </p>
        <p>{owner}</p>
     
      </div>
    );
  }
  
  export default CreditCard;