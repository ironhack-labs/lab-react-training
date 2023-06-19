const rating = [1, 2, 3, 4, 5];

function Rating(props) {
  return (
    <div>
      {rating.map((el) => {
        let score = '☆☆☆☆☆';
        if (Math.floor(props.children) === el) {
          return Math.floor(props.children);
        }
      })}
    </div>
  );
}

export default Rating;
