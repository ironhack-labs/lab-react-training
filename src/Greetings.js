function Greetings(props) {
  return (
    <div>
      <h3>
        {props.lang}, {props.name}
      </h3>
    </div>
  );
}

export default Greetings;
