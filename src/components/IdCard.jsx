const IdCard = ({

    lastName,
    firstName,
    gender,
    height,
    birth,
    picture

}) => {

    return (
        <article className="cardi" > <img src={picture} alt={firstName} /> <br />

            <span>First name: {firstName}</span> <br />
            <span>Last name: {lastName}</span> <br />
            <span>Gender: {gender}</span> <br />
            <span>Height: {height}</span> <br />
            <span>Birth: {birth.toDateString()}</span> <br />
        </article>

    )
}

export default IdCard