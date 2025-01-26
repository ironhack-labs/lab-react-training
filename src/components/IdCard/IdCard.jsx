import './IdCard.css'

function IdCard (props){
return (
    <div className="idCard">
        <img src={props.picture} alt="profile picture" />
        <div className="card-info">
            <p><b>First name:</b>{props.firstName}</p>
            <p><b>Las name:</b>{props.lastName}</p>
            <p><b>Gender:</b>{props.gender}</p>
            <p><b>Height:</b>{props.height}</p>
            <p><b>Birth:</b>{props.birth.toDateString()}</p>
        </div>
    </div>
)
}

export default IdCard;