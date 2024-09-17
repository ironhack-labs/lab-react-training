function Random(props) {
  let random = Math.round(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div className="random-numbers">
      <p>
        Random value between {props.min} and {props.max} =&gt; {random}
      </p>
    </div>
  );
}
export default Random;
