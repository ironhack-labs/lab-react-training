import './IdCardStyle.css';

function IdCard(props) {
  return (
    <div className="IdCard">
        <div>
            <img src={props.picture} alt="Profile" />
        </div>
        
        <div>
            <p><b>First name: </b> {props.firstName}</p>
            <p><b>Last name: </b> {props.lastName}</p>
            <p><b>Gender: </b> {props.gender}</p>
            <p><b>Height: </b> {props.height}</p>
            <p><b>Birth: </b> {props.birth}</p>
        </div>
    </div>
  );
}

export default IdCard;
