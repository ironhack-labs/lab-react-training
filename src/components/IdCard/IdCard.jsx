import './IdCard.css'
const IdCard = ({ person }) => {
    const { lastName, firstName, gender, height, birth, picture } = person
    const fullName = `${firstName} ${lastName}`
    const date = birth.toDateString()
    return (
        <section className="Card">
            <img src={picture} alt={fullName} />
            <article>
                <h3><b>First Name: </b>{firstName}</h3>
                <h3><b>Last Name: </b>{lastName}</h3>
                <h3><b>Gender: </b>{gender}</h3>
                <h3><b>Height: </b>{height}</h3>
                <h3><b>Birth: </b>{date}</h3>
            </article>
        </section>
    )
}

export default IdCard