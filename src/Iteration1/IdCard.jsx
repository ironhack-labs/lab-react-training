import "./iteration1.css"

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    return (
        <article className="card">
            <div>
                <img src={picture} alt={firstName}/>
            </div>
            <div>
                <h5><strong>First name: </strong>{firstName}</h5>
                <h5><strong>Last name: </strong>{lastName}</h5>
                <h5><strong>Gender: </strong>{gender}</h5>
                <h5><strong>Height: </strong>{height}</h5>
                <h5><strong>Birth:</strong>{birth.toLocaleString()}</h5>
            </div>
        </article>
    )
}

export default IdCard