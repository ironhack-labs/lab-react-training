import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    
    return (

        <article className="card">
            <div className="img-card">
                <img src={picture} alt="profile-img" />
            </div>
            <div>
                <p><strong>First name:</strong> {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {birth.toString()}</p>
            </div>
        </article>
    )
}

export default IdCard
