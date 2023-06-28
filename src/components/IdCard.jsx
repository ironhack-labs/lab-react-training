export default function IdCard(props) {
  return (
    <div className="Idcard Border">
      <div>
        <img src={props.picture} alt="Profile" />
      </div>
      <div className="Iddata">
        <p>
          <span>First Name: </span>
          {props.firstName}
        </p>
        <p>
          <span>Last Name: </span>
          {props.lastName}
        </p>
        <p>
          <span>Gender Name: </span>
          {props.gender}
        </p>
        <p>
          <span>Height Name: </span>
          {props.height}
        </p>
        <p>
          <span>Birth Name: </span>
          {props.birth.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
