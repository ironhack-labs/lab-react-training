import './IdCard.css'
const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
    const birth2 = birth.toString().slice(0, 15)
    return (
        <div className="card">
            <div className="cardImage">
                <img src={picture} alt="foto" />
            </div>
            <div >
                <ul className="cardContent">
                    <li><strong>Last Name: </strong>{lastName}</li>
                    <li><strong>First Name: </strong>{firstName}</li>
                    <li><strong>Gender: </strong>{gender}</li>
                    <li><strong>Height: </strong>{height}</li>
                    <li><strong>Birthdate: </strong>{birth2}</li>
                </ul>
            </div>
        </div>
    )
}

export default IdCard