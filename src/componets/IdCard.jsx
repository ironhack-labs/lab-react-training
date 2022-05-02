import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture, variant }) => {
    return (<div className={variant}>
        <h2>{lastName}</h2>
        <h1>{firstName}</h1>
        <p>{gender}</p>
        <p>{height}</p>
        <p>{birth.toString()}</p>
        <img src={picture} alt="#" />
    </div>)

}

export default IdCard
