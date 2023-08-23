/* eslint-disable react/prop-types */

function Random(props) {
    const randomNumber = () => {
        return Math.floor(Math.random() * (props.max - props.min) + props.min)
    }

  return (
    <div>
      <p>Random value between {props.min} and {props.max}: {randomNumber}</p>
    </div>
  );
}

export default Random;
