import './idCard.css'

function IdCard (props) {
    return(
        <div className="idCard d-flex ms-5 mt-2 container">
            <img className="m-2" style={{height: '140px'}} src={props.picture} alt="description"></img>
            <div className="d-flex flex-column ms-3 mt-1">
                <span> <b>First Name:</b> {props.lastName}</span>
                <span> <b>Last Name:</b> {props.firstName}</span>
                <span> <b>Gender:</b> {props.gender}</span>
                <span> <b>Heigth</b> {props.height}</span>
                <span> <b>Birth:</b> {props.birth.toString().slice(3,15)}</span>
            </div>
        </div>
    )
}

export default IdCard