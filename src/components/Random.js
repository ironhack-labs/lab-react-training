function Random(props) {
  const min = props.min;
  const max = props.max;

  const randomNum = Math.ceil(Math.random() * ((max + 1) - min));

  return (
    <div>
      <p>
        Random value between {min} and {max} => {randomNum}
      </p>
    </div>
  );
}

export default Random;
