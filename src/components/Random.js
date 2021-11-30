function Random(props) {
  return (
    <div className="info-card">
      <p>
        Random value between {props.min} and {props.max} =>&#160;
        {Math.ceil(Math.random() * props.max)}
      </p>
    </div>
  );
}

export default Random;
