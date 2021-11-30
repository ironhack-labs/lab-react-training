function IdCard (props){

    const {card} = props

    let date= new Date(card.birth);
   
    return (

    <div>
    <p> First Name: {card.firstName} </p>
    <p> Last Name: {card.lastName}</p>
    <p> Gender: {card.gender}</p>
    <p> Height: { (card.height / 100) }m</p>
    <p>Birth: { date.toLocaleDateString('en-US') } </p>
    <img src={card.picture} alt="test"></img>
    </div>


    )

}

export default IdCard 