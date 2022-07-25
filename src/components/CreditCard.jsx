import masterCard from '../assets/images/master-card.svg'
import visa from '../assets/images/visa.png'

const CreditCard = (props) => {
    let year = props.expirationYear.toString().slice(-2)
    let month = props.expirationMonth;
    let numbers = props.number
    let type;
    let hideNum = [];

    for(let i = 0; i < numbers.length; i++){
        if (i< numbers.length - 4){hideNum.push('*')} 
        else {hideNum.push(numbers[i])}}
    props.type === 'Visa' ? type = visa : type = masterCard

    return ( 
        <div style={{
          backgroundColor: props.bgColor,
          color: props.color
        }} className="creditCards">  
          <div className="creditLogo">
            <img src={type} alt="" width={45} />
          </div>
          <div className="creditNumbers"> {hideNum} </div>
          <div className="creditInfo">
            <p>Expires {month}/{year} <span> {props.bank} </span> </p>
            <p> {props.owner} </p>
          </div>
        </div>
      );
    }
    
    export default CreditCard;