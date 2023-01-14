import './CreditCard.css'

function CreditCard(props){
    const { creditCardArray } = props
    const hiddenNumber = creditCardArray.map(creditCard=>{
        let newNumber = "•••• •••• ••••"+ " " + creditCard.number.slice(-4)
        creditCard.number = newNumber

    })
    console.log(hiddenNumber)
    return(
        creditCardArray.map(creditCard=>{
            return <div style={{backgroundColor:creditCard.bgColor}} className="credit-card">
                    <img className="logo" src={creditCard.logo}></img>
                    <h2 className='bold number'>{creditCard.number}</h2>
                    <div className='flex left'>
                        <div className='flex-c'>
                            <h4>Expires {creditCard.expirationMonth}/{creditCard.expirationYear}</h4>
                            <h4>{creditCard.owner}</h4>
                        </div>
                        <h4>{creditCard.bank}</h4>
                    </div>
                </div>
        })
    )
}

export default CreditCard