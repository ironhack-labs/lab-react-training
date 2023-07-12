import visa from "../assets/images/visa.png"


function CreditCard(props){
    
    let { type ,
          number ,
          expirationMonth ,
          expirationYear ,
          bank ,
          owner ,
          bgColor ,
          color, 
          photo
    } = props
    // We decide the logo
    if(type=== "Visa"){
        photo = visa
    }else{
        photo = "https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
    }
    // we hide the numbers
    number = "•••• •••• •••• " + number.substring(number.length - 4)


    return(
        <div className="card" style={{ width: "340px", height: "187px", backgroundColor: bgColor, color}}>
            <div className="row justify-content-end">
                <div className="col-2">
                    <img src={photo} alt="visa" style={{ width: "100%" }} />
                </div>
            </div>
                <h1>{number}</h1>
            <div className="d-flex align-items-start flex-column">
                <span>
                    Expires {" "}
                    {expirationMonth.toString().length == 1 ? "0" : ""}{expirationMonth}/
                    {expirationYear % 100}
                    {" " + bank}
                </span>
                
                <p>{owner}</p>
            </div>
        </div>
    )
}
export default CreditCard