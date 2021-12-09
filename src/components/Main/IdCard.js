function IdCard(props) {
    return (
        <div>
            <div className="IdCard">
                <img src={props.picture} alt="persons"/>
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birthday:</strong> {props.birth}</p>
                <hr/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default IdCard


