function Random(props) {
  const { min, max } = props;
  const num = Math.floor(Math.random() * (max - min + 1) + min);
  return (
    <>
      <div className="box">
        <p>Random value between 1 and 6 =&gt; {num}</p>
      </div>
    </>
  );
}

export default Random;
