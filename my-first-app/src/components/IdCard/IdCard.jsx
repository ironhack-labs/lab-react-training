import "./IdCard.css"


const IdCard = ({
    lastName,
    firstName,
    gender,
    height,
    birth,
    picture }) => {

    return (
        <article className="IdCard">
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth.toDateString()}</p>
            <img src={picture} alt={firstName} />
        </article>
    )
}

export default IdCard