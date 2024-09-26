import './IdCard.css'

const IdCard = ({ user }) => {

    const { lastName, firstName, gender, height, birth, picture } = user
    const date = birth.toString()

    return (
        <div className="card">
            <div>
                <img src={picture} alt={firstName} />
            </div>
            <div>
                <p><strong>First name:</strong>  {firstName}</p>
                <p><strong>Last name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {date}</p>
            </div>
        </div>
    )
}

export default IdCard