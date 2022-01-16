import './IdCard.css';

function IdCard(props) {
  console.log(props);
  return (
    <div className="IdCard">
              <img src={props.picture} alt={`${props.firstName} ${props.lastName}`} />
    <div className='IdCard-ctn'>

      <p>
        <strong>First name: </strong>
        {props.lastName}
      </p>
      <p>
        <strong>Last name: </strong>
        {props.firstName}
      </p>
      <p>
        <strong>Gender: </strong>
        {props.gender}
      </p>
      <p>
        <strong>Height: </strong>
        {`${props.height}m`}
      </p>

      <p>
        <strong>Birth: </strong>
        {`${new Date(props.birth).toDateString()}`}
        {/* to remove day
        .replace(/^\S+\s/,'')} */}
      </p>
    </div>

    </div>
  );
}

export default IdCard;
