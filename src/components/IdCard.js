function IdCard(props) {
  return (
    <span
      className="idCard"
      style={{ display: 'flex', border: '1px solid', margin: 5 }}
    >
      <img
        src={props.picture}
        className="picture"
        alt="picture"
        style={{ margin: 10 }}
      />
      <span style={{ textAlign: 'left', margin: 10 }}>
        <span className="firstName">
          <span style={{ fontWeight: 600 }}> First Name:</span>{' '}
          {props.firstName}
        </span>
        <br />
        <span className="lastName">
          <span style={{ fontWeight: 600 }}>Last Name:</span> {props.lastName}
        </span>
        <br />

        <span className="gender">
          <span style={{ fontWeight: 600 }}>Gender:</span> {props.gender}
        </span>
        <br />
        <span className="height">
          {' '}
          <span style={{ fontWeight: 600 }}>Height:</span> {props.height}
        </span>
        <br />
        <span className="birth">
          {' '}
          <spam style={{ fontWeight: 600 }}>Birth:</spam>{' '}
          {props.birth.toDateString()}
        </span>
        <br />
      </span>
    </span>
  );
}

export default IdCard;
