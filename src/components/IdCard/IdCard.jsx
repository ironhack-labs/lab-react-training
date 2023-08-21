import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <article className="IdCard">
            <img className="IdCard-image" src={picture} alt={firstName} />
            <div className="IdCard-info">
                <p><strong>First Name: </strong>{firstName} <br />
                    <strong>Last Name:</strong> {lastName} <br />
                    <strong>Gender:</strong> {gender} <br />
                    <strong>Height:</strong> {height} <br />
                    <strong>Birth:</strong> {birth}</p>
            </div>
        </article>
    )
}

export default IdCard
