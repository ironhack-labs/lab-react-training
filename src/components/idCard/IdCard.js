import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article>
            <img src={picture} alt="photo"></img>

            <div>
                <p><strong>lastName:</strong>{lastName}</p>
                <p><strong>firstName:</strong>{firstName}</p>
                <p><strong>gender:</strong>{gender}</p>
                <p><strong>height:</strong>{height}</p>
                <p><strong>birth:</strong> {birth.toDateString()}</p>
            </div>
        </article>
    )
}

export default IdCard