function CreditCard(props){
return(
    <div >
       <section> 
       <p>{props.type}</p>
       </section>
        <section>
        <p>{props.number}</p>
        </section>
        <section>
        <p>expires:{props.expirationMonth}/{props.expirationYear}</p>
        <p>{props.bank}</p>
        </section>
        <p>{props.owner}</p>
        
    </div>
)
}
export default CreditCard;