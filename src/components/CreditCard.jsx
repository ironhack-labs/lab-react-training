import './CreditCard.css'

const CreditCard = props => {
    

    const { type, number, expirationYear, bank, owner, color,bgColor } = props
    const hashCard = `**** **** **** ${number[12]}${number[13]}${number[14]}${number[15]}`;
    
    return (
        
            <div className="CreditCard"style={{ backgroundColor: `${bgColor}`, color: `${color}` }}>,
                <h3> Type {type}</h3>
                <p> {hashCard} </p>
                <p> {expirationYear}</p>
                <p>  {owner}</p>
                <p>  {bank}</p>
            </div>
      
    )
}
export default CreditCard