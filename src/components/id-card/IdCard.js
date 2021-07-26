function IdCard(props) {
    return (
        <div className="card col-2">
            <img src={props.picture} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title"> </h5>
                <p className="card-text">
                    <p><b>First Name:</b> {props.lastName}</p>
                    <p><b>Last Name:</b> {props.firstName}</p>
                    <p><b>Gender:</b> {props.gender}</p>
                    <p><b>Height:</b> {props.height}</p>
                    <p><b>Birth:</b> {props.birth}</p>
                </p>
            </div>
        </div>
    );
}

export default IdCard;