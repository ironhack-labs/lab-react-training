
function CreditCard({type, number, expirationYear, expirationMonth, bank, owner, bgColor, color}){
    const formatDate = (expirationMonth, expirationYear)=>{
        if (expirationMonth < 10) {
            expirationMonth = `0${ expirationMonth }`   
        }
        return (
            `Expires ${ expirationMonth}/${expirationYear.slice(expirationYear.length - 2 , expirationYear.length)}`
        )
    }

    return (
        <div className="card" style={{backgroundColor: `${bgColor}`, color: `${color}`}} >
            <div className="typeCard">
                <p>{type}</p>
            </div>
            <div className="numberCard"><i className="fa-solid fa-ellipsis"></i>{number.slice(number.length - 4 , number.length)}
            </div>
            <div>
                <div className="expires d-flex"><p>{formatDate(expirationMonth.toString(),expirationYear.toString())}</p> <p>{bank}</p></div>
            </div>
            <div className="owner">
                <p>{owner}</p>
            </div>

        
            
        </div>
    )
}
export default CreditCard