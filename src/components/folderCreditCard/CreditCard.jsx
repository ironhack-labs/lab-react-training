import "../folderCreditCard/CreditCard.css"
function Creditcard(props) {
    
    const number = props.number.slice(12)
    console.log(number)
    const expirationYear = props.expirationYear.toString().slice(2)
    const numberYear = Number(expirationYear)
    console.log(numberYear)

    const styleDiv = {
        backgroundColor: props.bgColor,
        color: props.color,
    }
    return (
        <div className="container-creditCard" style={styleDiv}>
            <div > 
            <img className="img-credit" src={props.img} alt={`imagen logo ${props.type}`} />
            </div> 
            <div>
                <p  className="number-credit"> <span className="dot-credit">···· ···· ····</span> {number}</p>
            </div>
            <div className="flex-direction-credit">
                <p className="text-credit">Expires {props.expirationMonth}/{numberYear}</p>
                <p  className="text-credit">{props.bank}</p>
            </div>
            <p  className="text-credit">{props.owner}</p>

        </div>
    )
}

export default Creditcard