function IdCard(props) {
    return (
        <div className="IdCard">
            <div>
                <img src={props.picture} alt="picture" />
            </div>
            <div>
                <p><b>Firstname</b>: {props.firstName}</p>
                <p><b>Lastname</b>: {props.lastName}</p>
                <p><b>Gender</b>: {props.gender}</p>
                <p><b>Height</b>: {props.height}</p>
                <p><b>Birth</b>: {props.birth.toISOString().split('T')[0]}</p>
            </div>
        </div>
    )
}
export default IdCard;