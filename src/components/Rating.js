const Rating = (props) => {
  const rating = Math.round(props.children);
  // First I create an array with 5 position and then I fill it with x number of dark stars and 5-x white stars. Finally I convert the array to string and erase all commas with the replaceAll method
  const arrayRating = new Array(5)
    .fill('★', 0, rating)
    .fill('☆', rating)
    .toString()
    .replaceAll(',', '');
  return (
    <div>
      <p>{arrayRating}</p>
    </div>
  );
};
export default Rating;
