import './Random.css'
const Random = (props) => {
  let random = 
  props.min + 1 + Math.floor(Math.random() * (props.max - props.min));

  return (
    <div className="Random">
      <p>
        Random value between {props.min} and {props.max} => {random}
      </p>
    </div>
  );
};
export default Random;
