function IdCard(props){
    return(
        <div className="idCard">
            <div>
                <img src={props.picture} alt="Profile Picture"/>
            </div>
            <div className="idCardInfo">
                <p>First name: {props.firstName}</p>
                <p>Last name: {props.lastName}</p>
                <p>Gender: {props.gender}</p>
                <p>Height: {props.height}</p>
                <p>Birth: {props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard;