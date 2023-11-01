function IdCard(props) {
    console.log(props); // Look at the props in the console!

    return (
        <div className="idCard">
            <img src={props.picture} alt="profile photo" />
            <div className="idCardText">
                <h3><span className="label">First Name:</span> {props.firstName}</h3>
                <h3><span className="label">Last Name:</span> {props.lastName}</h3>
                <h3><span className="label">Gender:</span> {props.gender}</h3>
                <h3><span className="label">Height:</span> {props.height}</h3>
                <h3><span className="label">Birth:</span> {props.birth.toDateString()}</h3>
            </div>
        </div>
    );
}

export default IdCard;
