const IdCard = (props) => {
  return (
    <div>
      <div
        style={{
          border: '1px solid black',
          display: 'flex',
          textAlign: 'left',
        }}
      >
        <div>
          <img src={props.picture} alt="" />
        </div>
        <div>
          <p>
            <span style={{ fontWeight: 'bold' }}>First Name: </span>
            {props.firstName}
          </p>

          <p>
            <span style={{ fontWeight: 'bold' }}>
              Last Name: {props.lastName}
            </span>
          </p>

          <p>
            <span style={{ fontWeight: 'bold' }}>Gender: {props.gender}</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>Height: {props.height}</span>
          </p>
          <p>
            <span style={{ fontWeight: 'bold' }}>
              Birth: {props.birth.toDateString()}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default IdCard;
