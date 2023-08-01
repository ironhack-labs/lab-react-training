function IdCard(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        border: '1px solid black',
        width: '400px',
        margin: '60px',
      }}
    >
      <div>
        <img src={props.picture} alt="Profile" />
      </div>
      <div>
        <p>
          <span>First Name: </span>
          {props.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {props.lastName}
        </p>
        <p>
          <span>Gender: </span>
          {props.gender}
        </p>
        <p>
          <span>Height: </span>
          {props.height}
        </p>
        <p>
          <span>Birth: </span>
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
