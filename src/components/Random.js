import classes from './Random.module.css';

const Random = (props) => {
  const randomNum =
    Math.floor(Math.random() * (props.max - props.min)) + props.min;
  return (
    <div className={classes.random}>
      <p>{randomNum}</p>
    </div>
  );
};

export default Random;
