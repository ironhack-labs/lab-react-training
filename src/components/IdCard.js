const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article>
            <img src={picture} />
            <h3>{firstName} {lastName}</h3>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth.toString()}</p>
        </article>
    )
}

export default IdCard