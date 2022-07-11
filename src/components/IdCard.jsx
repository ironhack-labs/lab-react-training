const IdCard = ({ firstName, lastName, genre, height, birth, picture }) => {
    return (
        <article>
            <img src={picture} alt="profileImage" />

            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{genre}</p>
            <p>{height}</p>
            <p>{birth.toDateString()}</p>

        </article>
    )
}

export default IdCard