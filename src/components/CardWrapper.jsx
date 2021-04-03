import cardData from '../data/cards.json'
import CreditCard from './CreditCard'

const CardWrapper = () => {
    return(
        <div className="row d-flex justify-content-center ">
            { cardData.map((card) => { 
                return <div className="col-xl-4" style={{'max-width': '380px'}} > <CreditCard {...card} key={ card.number } /> </div>
                }) 
            }

        </div>
    )
    
}

export default CardWrapper