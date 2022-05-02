
const IdCard = ({ picture, lastName, firstName, gender, height, birth }) => {

    return (
        <article className="idCardClass" alt="">
            <img src={picture} />
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>height: {height}</p>
            <p>Birth: {birth.toLocaleString()}</p>
        </article>
    )
}

export default IdCard