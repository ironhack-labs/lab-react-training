import '../Styles/Random.css';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Random(props) {
  return (
    <p className="Random">
      Random value between {props.min} and {props.max} =>
      {getRandomInt(props.min, props.max)}
    </p>
  );
}

// function Random(props) {
//   return (
//     <p>
//       Random value between {props.min} and {props.max} =>
//       {Math.floor(Math.random() * (props.max - props.min + 1) + props.min)}
//     </p>
//   );
// }

export default Random;
