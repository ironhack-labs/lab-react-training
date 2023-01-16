import "./Random.css"

function Random(props) {
    const { min, max } = props
    let random = Math.floor(Math.random() * ( max - min));

return (
    <div className="random">
      <h1>Random value between { min } and { max } = { random } </h1>
    </div>
  );
}

export default Random;