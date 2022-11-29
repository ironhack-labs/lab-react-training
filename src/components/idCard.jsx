const IdCard = (props) => {
    const myDate = props.birth.toDateString()
    return (
        <div className="IdCard">
            <img alt="pic" className="picture" src={props.picture} />
            <div className="IdcardInfo">
                <p><strong>First name:</strong> {props.firstName}</p>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}</p>
                <p><strong>Birth:</strong> {myDate}</p>
            </div>
        </div>
    )
}

export default IdCard