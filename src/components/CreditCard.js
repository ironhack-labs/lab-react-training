
import visa from '../assets/images/visa.png'
import master from '../assets/images/master-card.svg'

const creditCard = props => {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color} = props

    const style = {
        backgroundColor:bgColor,
        color:color
    }
    let imgSrc
    if(type ==='Visa'){
        imgSrc = visa
    }else{
        imgSrc = master
    }


    return (
        <div style={style}>    
            <img src={imgSrc} />
            <h2>**** **** **** {number.slice(12)}</h2>         
            <p>expires {expirationMonth}/{expirationYear}</p>
            <p>{bank}</p>
            <p>{owner}</p>

        </div>

    )
}

export default creditCard;