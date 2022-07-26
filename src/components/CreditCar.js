function CreditCard({type,number,expirationMonth,expirationYear,bank,owner,bgColor,color}){

    return(
        <div className="gretting">
        <div style={{
            background:`${bgColor}`,
            color:`${color}`
        }}>
            <span>{type}</span>
            <span>{number}</span>
            <span>{expirationMonth}</span>
            <span>{expirationYear}</span>
            <span>{bank}</span>
            <span>{owner}</span>
            
        </div>
        </div>
    )

}

export default CreditCard