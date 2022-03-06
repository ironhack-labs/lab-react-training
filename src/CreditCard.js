import visa from './assets/images/visa.png';
import mastercard from './assets/images/master-card.svg';

function CreditCard(props) {

    let logo = "";

    if (props.type === "Visa") {
        logo =  visa;
    } else {
        logo =  mastercard;
    };


    let divStyle = {
        backgroundColor: props.bgColor,
        color: props.color
    };

    //--------------------------------------------

    
        let number = props.number;
        let hideNum = [];

          for(let i = 0; i < number.length; i++){
          if(i < number-4){
            hideNum.push("*");
          }else{
            hideNum.push(number[i]);
          }
        };
    

    return (
    <div className="creditCard" style={divStyle}>
          <div>
          <img src={logo} alt="logo" id ="logo"></img>
            <br />
            <b> {hideNum} </b>
            <br />
            {props.expirationMonth}
            <br />
            {props.expirationYear}
            <br />
            {props.bank}
            <br />
            {props.owner}
            
          </div>
        </div>
)

};

export default CreditCard;