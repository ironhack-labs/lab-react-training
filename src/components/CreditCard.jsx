function CreditCard(props){
    const{type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}=props
    let newCardNum = number.split("").splice(-4)
    let expirationYearShort = expirationYear.toString().split("").splice(-2)
    let stars="********"
    const cardImage = {"Visa":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png","Master Card":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"}
    return(

        <div className="bankCards"  style={{backgroundColor:bgColor,color:color}}>
        <img className="image" src={cardImage[type]} alt="" />
        <p>{stars}{newCardNum}</p>
        <div>
            <p>Expire: {expirationMonth}/{expirationYearShort} {bank} <br /> {owner}</p>
            </div>
        </div>

    )
}

export default CreditCard