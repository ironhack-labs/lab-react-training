function IdCard(props) {
    console.log(props)
    return (
        <div className="userInfoContainer rowContainer">
            <img src={props.picture} alt="user" />
            <ul>
                <li><strong>First name:</strong> {props.firstName}</li>
                <li><strong>Last name:</strong> {props.lastName}</li>
                <li><strong>Gender:</strong> {props.gender}</li>
                <li><strong>Height:</strong> {props.height}</li>
                <li><strong>Birth:</strong> {props.birth.toDateString()}</li>
            </ul>
        </div>
    )
}

export default IdCard;