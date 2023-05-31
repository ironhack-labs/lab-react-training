import BirthDate from "./birthDate.jsx"
function IdCard(props) {
    return <div className="card">
        <div className="row">
            <div className="col-4">
                <img src={props.picture} alt="broken img" />
            </div>
            <div className="col">
                <p><b>First name:</b> {props.firstName}</p>
                <p><b>Last name:</b> {props.lastName}</p>
                <p><b>Gender:</b> {props.gender}</p>
                <p><b>Height:</b> {props.height/100} m</p>
                <p><b>Birth:</b> <BirthDate date={props.birth}/></p>
            </div>
        </div>
    </div>
}

export default IdCard