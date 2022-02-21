import "./IdCard.css"

const IdCard = (props) => {
    let { lastName, firstName, gender, height, birth, picture } = props
    return (
        <article className="card">
            <img src={picture} />
            <p><span className="strong">First name: </span>{firstName}</p>
            <p><span className="strong">Last name: </span>{lastName}</p>
            <p><span className="strong">Gender: </span>{gender}</p>
            <p><span className="strong">Height: </span>{height}</p>
            <p><span className="strong">Birth: </span>{birth}</p>
        </article>
    )
}

export default IdCard