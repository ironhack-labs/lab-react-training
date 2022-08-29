import "./Random.css";

function Random({ min, max }) {
  let result = Math.floor(Math.random() * (max - min) + min);

  return (
    <div className="random-box d-flex my-2 mx-2 ps-2">
      <p>Random value between {min} and {max} = <b>{result}</b></p>
    </div>
  );
};

export default Random;