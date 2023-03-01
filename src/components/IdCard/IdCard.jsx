import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const fullName = `${firstName} ${lastName}`

    const date = new Date(birth).toDateString()

    return (
        <div className="IdCard">
            <div>
                <img src={picture} alt={fullName} />
            </div>
            <article>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {date}</p>
            </article>
        </div>
    )
}

export default IdCard