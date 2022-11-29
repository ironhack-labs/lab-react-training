const IdCard = props => {

    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <article>
            <p>Last name: {lastName}</p>
            <p>First name: {firstName}</p>
            <p>Gender: {gender}</p>
            <p>Height: {height}</p>
            <p>Birth: {birth}</p>
            <img src={picture}></img>
        </article>

    )

}


export default IdCard