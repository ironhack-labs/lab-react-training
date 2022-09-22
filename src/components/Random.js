function Random(props) {
  const { min, max } = props;
  const randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <div className="card">
      <p>
        Random value between {min} and {max} {'=>'} {randNumber}
      </p>
    </div>
  );
}

export default Random;
