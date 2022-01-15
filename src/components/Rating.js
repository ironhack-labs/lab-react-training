import classes from './Rating.module.css';

const Rating = (props) => {
  const rating = Math.round(props.children);

  const starArray = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      starArray.push(<p key={i}>&#9733;</p>);
    } else {
      starArray.push(<p key={i}>&#9734;</p>);
    }
  }
  console.log(starArray);

  return <div className={classes.rating}>{starArray}</div>;
};

export default Rating;
