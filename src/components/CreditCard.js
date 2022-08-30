import './CreditCard.css';
import  visa from '../images/visa.png';
const CreditCard = (props) =>{
  const NumberCredit = (num) =>{
    return num.substr(12,15)
  }
  const Dots =()=>{
    return(
      <div>
  <span class="dot"></span>
  <span class="dot"></span>
  <span class="dot"></span>
</div>
    )
  }
    const style = {
        color: props.color,
        background: props.bgColor
    }
    return(
      <div className="CreditCard"style={style}>
        <img id="imageCardCredit"src={props.type ==='Visa' ? visa : null} alt="logocardCredit"/>
        <p>{Dots()} {Dots()} {Dots()} {NumberCredit(props.number)}</p>
        <div>
        <div>
        <p>Expires {props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
        </div>
        <p>{props.owner}</p>
      </div>
      </div>
    )
}
export default CreditCard
