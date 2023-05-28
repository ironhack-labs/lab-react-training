export default function Random(props) {
  return (
    <div className="Border">
      <p>
        Random value between {props.min} and {props.max} ={'>'}
        {Math.floor(Math.random() * (props.max - props.min + 1)) + props.min}
      </p>
    </div>
  );
}
