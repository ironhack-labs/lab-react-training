function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div
      style={{
        border: '2px solid',
        width: '50%',
        marginBottom: '10px',
        display: 'flex',
      }}
    >
      <div style={{}}>
        <img
          style={{ width: '160px' }}
          src={picture}
          className="profileImage"
          alt="profileImage"
        />
      </div>
      <div
        style={{
          lineHeight: '0.3',
          textAlign: 'left',
          marginLeft: '6px',
        }}
      >
        <p>
          <b>First name:</b> {firstName}
        </p>
        <p>
          <b>Last name: </b> {lastName}
        </p>
        <p>
          <b>Gender: </b>
          {gender}
        </p>
        <p>
          <b>Height: </b>
          {height / 100}m
        </p>
        <p>
          <b>Birth: </b>
          {birth.toDateString()}
        </p>
      </div>
    </div>
  );
}

export default IdCard;
