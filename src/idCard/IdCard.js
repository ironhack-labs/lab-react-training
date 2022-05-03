const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article>
            <p>lastName: {lastName}</p>
            <p>firstName: {firstName}</p>
            <p>gender: {gender}</p>
            <p>height: {height}</p>
            <p>birth: {birth.toString()}</p>
            <img src="https://tcab.es/wp-content/uploads/2018/03/woman-tech.jpg" alt={firstName} />
        </article>
    )
}

export default IdCard