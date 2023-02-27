import './IdCard.css'

const IdCard = (props) => {

    const { lastName, firstName, gender, height, birth, picture } = props
    const bday = birth.toDateString()

    return (
        <div className="card">
            <div className="picture">
                <img src={picture} alt={firstName} />
            </div>
            <div className="info">
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height} m.</p>
                <p><strong>Birth:</strong> {bday}</p>
            </div>
        </div>
    )
}

export default IdCard