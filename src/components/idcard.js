function IdCard(props) {
    return (
        <div className="idCard">
            <p>
                <b>First Name:</b> {props.firstName}
            </p>
            <p>
                <b>Last Name:</b> {props.lastName}            
            </p>
            <p>
                <b>Gender:</b> {props.gender}            
            </p>
            <p>
                <b>Height:</b> {props.height}
            </p>
            <p>
                <b>Birth:</b> {props.birth.toDateString()}
            </p>
            <p>
                <img src={props.picture} alt="id card"></img>
            </p>
        </div>
    )
}

export default IdCard;