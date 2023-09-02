import "../styles/IdCard.css";

function IdCard(props) {
    return (
        <div className="IdCard">
            <img src={props.picture} alt='Profile picture'/>
            <div>
                <p><span>First name: </span>{props.firstName}</p>
                <p><span>Last name: </span>{props.lastName}</p>
                <p><span>Gender: </span>{props.gender}</p>
                <p><span>Height: </span>{props.height.toString()}</p>
                <p><span>Birth: </span>{props.birth.toString()}</p>
            </div>
        </div>
    )
}

export default IdCard