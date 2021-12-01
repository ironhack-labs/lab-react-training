import './Rating.styles.css';

const Rating = (props) => {
  const {children} = props;
  const ratingStars = (children) =>
    '★'.repeat(Math.round(children)) + '☆'.repeat(5 - Math.round(children));
  return (
      <p>{ratingStars(children)}</p>
  );
};

export default Rating;