import './IdCard.css';

function IdCard(props) {
  return (
    <div className="IdCard">
      <img src={props.picture} alt="Id foto" />
      <div className="card">
        <p>
          <span>First Name</span>: {props.firstName}{' '}
        </p>
        <p>
          <span>Last Name</span>: {props.lastName}{' '}
        </p>
        <p>
          <span>Gender</span>: {props.gender}{' '}
        </p>
        <p>
          <span>Height</span>: {props.height} cm{' '}
        </p>
        <p>
          <span>Birth</span>: {props.birth}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
