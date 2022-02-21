import './IdCard.css'

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {

    return (
        <div className="idCard">
            <img src={picture} alt="ImageCard" />
            <ul>
                <li><span>First Name: </span> {firstName}</li>
                <li><span>Last Name: </span>{lastName}</li>
                <li><span>Gender: </span>{gender}</li>
                <li><span>Height: </span>{height}</li>
                <li><span>Birth: </span>{birth.toDateString()}</li>
            </ul>
        </div>
    )
}

export default IdCard