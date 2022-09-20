import './IdCard.css'
const IdCard = (props) => {
    return (
        <div className="idCard">
            <div>
                <img src={props.picture} alt="profile image" />
            </div>
            <div className="text">
                <p><b>First Name</b>: {props.firstName}</p>
                <p><b>Last Name</b>: {props.lastName}</p>
                <p><b>Geneder</b>: {props.gender}</p>
                <p><b>Height</b>: {props.height / 100} m</p>
                <p><b>Birth</b>: {props.birth.toDateString()}</p>
            </div>

        </div>
    )
}

export default IdCard