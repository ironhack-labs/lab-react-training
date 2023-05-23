import "./IdCard.css"

function IdCard({picture, firstName, lastName, gender, height, birth}) {
    return(<div className="idCard">
        <img src={picture} alt="Profile"/>
        <ul>
        <li><span>First name: </span>{firstName}</li>
        <li><span>Last name: </span>{lastName}</li>
        <li><span>Gender: </span>{gender}</li>
        <li><span>Height: </span>{height}</li>
        <li><span>Birth: </span>{birth.toDateString()}</li>
        </ul>
        </div>
    )
}

export default IdCard