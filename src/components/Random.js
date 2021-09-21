function Random(props) {
  let random = Math.floor(Math.random() * (props.max - props.min) + props.min)
  return (
    <div className="Random">
      Random value between {props.min} and {props.max} =&gt; {random}
    </div>
  );
}

export default Random;
