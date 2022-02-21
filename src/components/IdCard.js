const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="IdCard">
            <img src={picture} alt={firstName} />
            <p>First name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toLocaleString()}</p>
        </article>
    )
}


export default IdCard