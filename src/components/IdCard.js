import './IdCard.css';

function IdCard(props) {
    return (
        <div className="container">
            <img src={props.picture} alt={props.firstName} />
            <div>
                <p><strong>Last name:</strong> {props.lastName}</p>
                <p><strong>First Name:</strong> {props.firstName}</p>
                <p><strong>Gender:</strong> {props.gender}</p>
                <p><strong>Height:</strong> {props.height}cm</p>
                <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
            </div>
        </div>
    );
}

export default IdCard;