function IdCard(props) {
  return (
    <article>
      <div className="grid">
        <div>
          <img src={props.picture} alt={props.firstname} />
        </div>
        <div>
          <p>
            <strong>First Name:</strong> {props.firstName}
            <br />
            <strong>Last Name: </strong> {props.lastName}
            <br />
            <strong>Height:</strong> {props.height}
            <br />
            <strong>Birthday:</strong> {props.birthday}
          </p>
        </div>
      </div>
    </article>
  );
}

export default IdCard;
