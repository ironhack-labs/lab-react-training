import './IdCard.css'

const User = ({ user }) => {
    let { lastName, firstName, gender, height, birth, picture } = user
    birth = birth.getDay() + "-" + birth.getMonth() + "-" + birth.getYear()

    return (
        <div className="id-card">
            <img src={picture} alt={firstName} />
            <div>
                <p><strong>First Name: </strong>{firstName}</p>
                <p><strong>Last Name: </strong>{lastName}</p>
                <p><strong>Gender: </strong>{gender}</p>
                <p><strong>Heigth: </strong>{height} cm </p>
                <p><strong>Birth: </strong>{birth}</p>
            </div>
        </div>
    )
}

export default User