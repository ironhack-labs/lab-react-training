import './IdCard.css'

const IdCard = props => {
    const { lastName, firstName, gender, height, birth, picture } = props

    return (
        <article className="IdCard">
            <>
                <img src={picture}></img>
            </>
            <>
                <p>Last name: {lastName}</p>
                <p>First name {firstName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}</p>
                <p>Birth: {birth.toDateString()}</p>
            </>
        </article>
    )
}

export default IdCard


