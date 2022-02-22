
const IdCard = props => {
    return (
        <div className="idCardDiv blackBox">
            <img src={props.picture} alt="user-img" />
            <div className="idCardDetailsDiv">
                <p><strong>First Name: </strong>{props.firstName}</p>
                <p><strong>Last Name: </strong>{props.lastName}</p>
                <p><strong>Gender: </strong>{props.gender}</p>
                <p><strong>Height: </strong>{props.height}</p>
                <p><strong>Birth Date: </strong>{props.birth.toDateString()}</p>
            </div>
        </div>
    )
}

export default IdCard