function CreditCard(props){
    let logo = props.cCard.type
    let cardNumber =props.cCard.number
    let imageLogo=""
    let color= ""

if (logo ==="Visa"){
    imageLogo = "src/assets/images/visa.png" 
}
else{imageLogo ="src/assets/images/master-card.svg"} //não encontrei a imagem do logo do mastercard





    return(
        

            <div className="card">
             <section className="logo"><img  src={imageLogo}/></section>   {/* não ficou a funcionar */}
             <section className="number"><h1>{`.... .... .... ${props.cCard.number.slice(12,17)}`}</h1></section>
             <section className="dateBank">
                <h3 className="date">{`${props.cCard.expirationMonth}/${props.cCard.expirationYear}`}</h3>
                <h3 className="bank">{props.cCard.bank}</h3>
             </section>
             <section className="name"><h3>{props.cCard.owner}</h3></section>
        



            </div>
            
            
        

    )

    
}
export default CreditCard