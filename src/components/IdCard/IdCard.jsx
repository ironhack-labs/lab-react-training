import './IdCard.css'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {

    const fullName = `${firstName} ${lastName}`

    const date = new Date(birth).toString().split(0, 1).toString()

    return (
        <div className="IdCard">
            <div>
                <img src={picture} alt={fullName} />
            </div>
            <div>
                <p><strong>First Name:</strong> {firstName}</p>
                <p><strong>Last Name:</strong> {lastName}</p>
                <p><strong>Gender:</strong> {gender}</p>
                <p><strong>Height:</strong> {height}</p>
                <p><strong>Birth:</strong> {date}</p>
            </div>
        </div>
    )
}

export default IdCard