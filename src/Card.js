function formatDate(date) {
  return date.toLocaleDateString();
}

function Person(props) {
  return (
    <div style={{ border: '1px solid black', textAlign: 'left' }}>
      <p>Last Name: {props.lastName}</p>
      <p>First Name: {props.firstName}</p>
      <p>Gender: {props.gender}</p>
      <p>Height: {props.height}</p>
      <p>Birth: {formatDate(props.birth)}</p>

      <img
        style={
          {
            // float: 'left',
          }
        }
        src={props.picture}
      />
    </div>
  );
}

export default Person;
