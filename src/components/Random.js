import "./Random.css"

function Random(props) {
  const min = props.min;
  const max = props.max;

  const randomNum = Math.ceil(Math.random() * (max - min));

  return (
    <div className="random">
      <p>
        Random value between {min} and {max} => {randomNum}
      </p>
    </div>
  );
}

export default Random;
