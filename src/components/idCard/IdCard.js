import './idCard.css'
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const date = birth.toString()

    return (
        < article className="id-card">
            <div>
                <img src={picture} />
            </div>
            <p><strong>First name:</strong>{firstName}</p>
            <p><strong>Last name:</strong>{lastName}</p>
            <p><strong>Gender:</strong>{gender}</p>
            <p><strong>Height</strong>{height}</p>
            <p><strong>Birth</strong>{date}</p>
        </article>
    )
}

export default IdCard