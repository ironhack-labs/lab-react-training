const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (

        <article className="idCard">
            <img src={picture} alt="StudentImage" />
            <p>First name: {firstName}</p>
            <p>Last name: {lastName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth.toString().slice(0, 16)}</p>
        </article>
    )
}

export default IdCard

