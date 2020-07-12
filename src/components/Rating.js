import React from 'react';

const Rating = (props) => {
  const rateNumber = Math.round(props.children);
  let regularStar = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-star"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
      />
    </svg>
  );

  let solidStar = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      className="bi bi-star-fill"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  let stars;

  switch (rateNumber) {
    case 1:
      stars = (
        <div className="stars-rating">
          {solidStar}
          {regularStar}
          {regularStar}
          {regularStar}
          {regularStar}
        </div>
      );
      break;
    case 2:
      stars = (
        <div className="stars-rating">
          {solidStar}
          {solidStar}
          {regularStar}
          {regularStar}
          {regularStar}
        </div>
      );
      break;
    case 3:
      stars = (
        <div className="stars-rating">
          {solidStar}
          {solidStar}
          {solidStar}
          {regularStar}
          {regularStar}
        </div>
      );
      break;
    case 4:
      stars = (
        <div className="stars-rating">
          {solidStar}
          {solidStar}
          {solidStar}
          {solidStar}
          {regularStar}
        </div>
      );
      break;
    case 5:
      stars = (
        <div className="stars-rating">
          {solidStar}
          {solidStar}
          {solidStar}
          {solidStar}
          {solidStar}
        </div>
      );
      break;

    default:
      stars = (
        <div className="stars-rating">
          {regularStar}
          {regularStar}
          {regularStar}
          {regularStar}
          {regularStar}
        </div>
      );
      break;
  }

  return <div>{stars}</div>;
};

export default Rating;
