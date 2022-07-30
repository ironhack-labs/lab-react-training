function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}){

    function imgCard(tBank){
        if (tBank === "Visa" ){
            return <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-1.png" width={60} height={25}></img>
        }
        else if (tBank ==="Master Card"){
            return <img src="https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1990_100_2x.png" width={60} height={25}></img>
        }
    }
    
    const newNumber1 =number.charAt(12)
    const newNumber2 =number.charAt(13)
    const newNumber3 =number.charAt(14)
    const newNumber4 =number.charAt(15)
    return(
    


        <div className="card" style={{
            background:`${bgColor}`,
            color:`${color}`
        }}>
            <div className="imgCard">
            <span>{imgCard(type)}</span>
            </div>

            <div className="number">
            <span>**** **** **** {newNumber1}{newNumber2}{newNumber3}{newNumber4}</span>
            </div>
            
            <div className="dateCard">
            <div>
            <span>Expires {expirationMonth}</span>/
            <span>{expirationYear}</span>
            </div>

            <div className="bank">
            <span>{bank}</span>
            </div>
            </div>

            <div className="owner">
            <span>{owner}</span>
            </div>
        </div>
        
    )

}

export default CreditCard