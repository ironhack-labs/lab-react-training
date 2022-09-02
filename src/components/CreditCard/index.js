import visaLogo from '../../assets/images/visa.png';
import masterLogo from '../../assets/images/masterlogo.png'


function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

    function setType(type) {
        if(type==="Visa") {
            return "../../assets/img/visa.png"
        }
        else if(type==="Master Card"){
            return "../../assets/img/masterlogo.png"
        }
        else return ""
    }
    return (
       
            <div className="creditCard" style={{backgroundColor: `${bgColor}`}}>
                <div className="logo">
                    <img src={setType(type)} alt="logo"></img>
                </div>
                <div className="number" style={{color: `${color}`}}>
                    <span>•••• •••• •••• </span><span>{number.split('').splice(12,4)}</span>
                </div>
                <div className="data" style={{color: `${color}`}}>

                    
                    <pre>Expires {expirationMonth}/{expirationYear} {bank}</pre>
    
                    <pre>{owner}</pre>
                </div>

            </div>
        
    )

        
}

export default CreditCard