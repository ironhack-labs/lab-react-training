import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    const newBirth = birth.toDateString()

    return (
        <div className="Card">
            <img src={picture} alt="picture" />
            <div>
                <p>First name: {firstName}</p>
                <p>Last name: {lastName}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height}cm</p>
                <p>Birth: {newBirth}</p>
            </div>
        </div>
    )
}

export default IdCard